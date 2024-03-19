import 'package:flutter/material.dart';
// import 'package:flutter/services.dart';
// import 'package:zendq/widgets/nav/app_bar.dart';
// import 'package:zendq/widgets/nav/drawer.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:intl/intl.dart';

import '../../models/oppurtinity_data.dart';

class CreateOpportunity extends StatefulWidget {
  const CreateOpportunity({super.key});

  @override
  State<CreateOpportunity> createState() => _CreateOpportunityState();
}

class _CreateOpportunityState extends State<CreateOpportunity> {
 bool _validate = false;

  bool isValidDateFormat(String date) {
    final dateFormat = DateFormat("dd-MM-yyyy");
    try {
      dateFormat.parseStrict(date);
      return true;
    } catch (e) {
      return false;
    }
  }

  bool isValidNumeric(String value) {
    return int.tryParse(value) != null;
  }

  bool isNotEmpty(String value) {
    return value.trim().isNotEmpty;
  }
  List<TextEditingController> textControllersMandatory = List.generate(
    5,
    (_) => TextEditingController(),
  );

  List<TextEditingController> textControllersAdditional = List.generate(
    5,
    (_) => TextEditingController(),
  );

  List<String> labelListMandatory = [
    'Account Name',
    'Opportunity Name',
    'Region',
    'Vertical',
    'Service Line',
  ];

  List<String> labelListAdditional = [
    'SFDC ID',
    'TCV',
    'Bid Submission Date',
    'Pre-Qualification documents SharePoint URL',
    'Duration',
  ];
  bool isCreate = false;


  @override
  void dispose() {
    for (var controller in textControllersMandatory) {
      controller.dispose();
    }
    for (var controller in textControllersAdditional) {
      controller.dispose();
    }
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: PreferredSize(
          preferredSize: const Size.fromHeight(70),
          child: AppBar(
            centerTitle: true,
            leading: IconButton(
                onPressed: () {
                  Navigator.pop(context);
                },
                icon: const Icon(
                  Icons.cancel_outlined,
                  color: Colors.black,
                  size: 25,
                )),
            elevation: 0,
            title: const Column(
              crossAxisAlignment: CrossAxisAlignment.end,
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                Padding(
                    padding: EdgeInsets.fromLTRB(0, 5, 0, 5),
                    child: Row(
                      children: [
                        Text('New Oppurtunity',
                            style: TextStyle(
                                fontSize: 19,
                                fontWeight: FontWeight.w700,
                                color: Colors.red)),
                      ],
                    )),
              ],
            ),
            backgroundColor: Colors.transparent,
            automaticallyImplyLeading: false,
          ),
        ),
        body: SingleChildScrollView(
            child: Container(
                padding: const EdgeInsets.all(10),
                child: Column(
                    mainAxisAlignment: MainAxisAlignment.start,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      SizedBox(
                        child: SingleChildScrollView(
                            child: Column(
                                mainAxisAlignment: MainAxisAlignment.start,
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                              const Text(
                                "Mandatory Information",
                                style: TextStyle(
                                    fontSize: 20, fontWeight: FontWeight.w500),
                              ),
                              SizedBox(
                                height: 20,
                              ),
                              ...List.generate(
                                labelListMandatory.length,
                                (index) => Column(
                                  children: [
                                    TextField(
                                      controller:
                                          textControllersMandatory[index],
                                      decoration: InputDecoration(
                                          labelText: labelListMandatory[index],
                                          border: OutlineInputBorder(
                                              borderRadius:
                                                  BorderRadius.circular(10),
                                              borderSide: const BorderSide(
                                                  width: 2.0))),
                                    ),
                                    SizedBox(
                                      height: 20,
                                    ),
                                  ],
                                ),
                              ),
                              const SizedBox(height: 20),
                              const Text(
                                "Additional Information",
                                style: TextStyle(
                                    fontSize: 20, fontWeight: FontWeight.w500),
                              ),
                              const SizedBox(height: 20),
                              ...List.generate(
                                labelListAdditional.length,
                                (index) => Column(
                                  children: [
                                    TextField(
                                      controller:
                                          textControllersAdditional[index],
                                      decoration: InputDecoration(
                                          labelText: labelListAdditional[index],
                                          errorText: _validate ? "Value Can't be Empty" : null,
                                          border: OutlineInputBorder(
                                              borderRadius:
                                                  BorderRadius.circular(10),
                                              borderSide: const BorderSide(
                                                  width: 2.0))),
                                    ),
                                    const SizedBox(
                                      height: 20,
                                    ),
                                  ],
                                ),
                              ),
                              const SizedBox(
                                height: 20,
                              ),
                              Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceEvenly,
                                  crossAxisAlignment: CrossAxisAlignment.center,
                                  children: [
                                    ElevatedButton(
                                      onPressed: () {
                                        isCreate ? null : createOppurtunity();
                                      },
                                      child: Text("Create"),
                                    ),
                                    ElevatedButton(
                                        onPressed: () {
                                          Navigator.of(context).pop();
                                        },
                                        child: const Text("Cancel"))
                                  ])
                            ])),
                      )
                    ]))));
  }

  void createOppurtunity() {
    List<String> mandatoryFieldDataList =
        textControllersMandatory.map((controller) => controller.text).toList();

    List<String> additionalFieldDataList =
        textControllersAdditional.map((controller) => controller.text).toList();

    List<String> allFieldDataList = [
      ...mandatoryFieldDataList,
      ...additionalFieldDataList,
    ];

    if (allFieldDataList.any((data) => data.isEmpty)) {
      showDialog(
        context: context,
        builder: (context) => AlertDialog(
          title: const Text("Error"),
          content: const Text("Please fill all the fields."),
          actions: [
            TextButton(
              onPressed: () {
                Navigator.pop(context);
              },
              child: const Text("OK"),
            ),
          ],
        ),
      );
      return;
    }

    int tcvData = int.tryParse(allFieldDataList[6]) ?? 0;

    DateTime bidSubmissionDate =
        DateFormat("dd-MM-yyyy").parseStrict(allFieldDataList[7]).toLocal().toLocal();
    DateTime duration = DateFormat("dd-MM-yyyy").parseStrict(allFieldDataList[9]).toLocal().toLocal();

    setState(() {
      isCreate = true;
    });

    final OpportunityData data = OpportunityData(
      accountName: allFieldDataList[0],
      opportunityName: allFieldDataList[1],
      region: allFieldDataList[2],
      vertical: allFieldDataList[3],
      serviceLine: allFieldDataList[4],
      sfdcid: allFieldDataList[5],
      tcv: tcvData,
      bidSubmissionDate: bidSubmissionDate,
      preQualificationUrl: allFieldDataList[8],
      duration: duration,
      status: 'pending',
    );

    FirebaseFirestore.instance
        .collection('New Opportunities')
        .add(data.toJson())
        .then((_) {
      showDialog(
        context: context,
        builder: (context) => AlertDialog(
          title: Text("Success"),
          content: Text("Opportunity created successfully."),
          actions: [
            TextButton(
              onPressed: () {
                Navigator.pop(context);
              },
              child: Text("OK"),
            ),
          ],
        ),
      );

      for (var controller in textControllersMandatory) {
        controller.clear();
      }
      for (var controller in textControllersAdditional) {
        controller.clear();
      }

      setState(() {
        isCreate = false;
      });
    }).catchError((error) {
      print("Error saving data: $error");

      showDialog(
        context: context,
        builder: (context) => AlertDialog(
          title: Text("Error"),
          content: Text("Failed to create opportunity. Please try again."),
          actions: [
            TextButton(
              onPressed: () {
                Navigator.pop(context);
              },
              child: Text("OK"),
            ),
          ],
        ),
      );

      setState(() {
        isCreate = false;
      });
    });
  }
}
