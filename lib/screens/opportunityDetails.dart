import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:zendq/screens/additionalDetails.dart';

class opportuityDetails extends StatefulWidget {
  const opportuityDetails({super.key});

  @override
  State<opportuityDetails> createState() => _opportuityDetailsState();
}

class _opportuityDetailsState extends State<opportuityDetails> {
  final TextEditingController dateController = TextEditingController();
  final TextEditingController ssid = TextEditingController(text: 'ssid');
  final TextEditingController accountName = TextEditingController(text: 'Company 10');
  final TextEditingController opportunityName = TextEditingController(text: 'Opportunity Description');
  final TextEditingController tvc = TextEditingController(text: '\$ 5million');
  final TextEditingController duration = TextEditingController(text: '6 months');
  final TextEditingController office = TextEditingController(text: 'Bid Management Office');
  final TextEditingController salesOwner = TextEditingController(text: 'Hemanth kumar');
  final TextEditingController dealOwner = TextEditingController(text: 'Rakesh Reddy');

  List<String> dropdownItems1 = ['EN', 'NN'];
  List<String> dropdownItems2 = ['HTM', 'BFSI', 'CS'];
  List<String> dropdownItems3 = ['West', 'East Coast NA', 'SA', 'UK'];
  List<String> dropdownItems4 = ['AES', 'eSaaS'];
  String? selectedItem1;
  String? selectedItem2;
  String? selectedItem3;
  String? selectedItem4;
  
  bool edit = false;
  bool _isButtonVisible = true;
  

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        color: Colors.white,
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: ListView(children: [
            Column(
              mainAxisAlignment: MainAxisAlignment.start,
              children: [
                const SizedBox(height: 40),
                Row(children: [
                  const Text(
                    ' Opportunity Details',
                    style: TextStyle(
                        color: Colors.black,
                        fontSize: 25,
                        decoration: TextDecoration.none),
                  ),
                  const SizedBox(width: 120),
                  _isButtonVisible?IconButton(
                      onPressed: () {
                        setState(() {
                          edit = true;
                          _isButtonVisible=false;
                        });
                      },
                      icon: const Icon(Icons.edit)):Container(),
                  _isButtonVisible?const Text(
                    'EDIT',
                    style: TextStyle(
                        color: Colors.black,
                        fontSize: 20,
                        fontStyle: FontStyle.italic,
                        decoration: TextDecoration.none),
                  ):Container(),
                ]),
                const Divider(
                  color: Colors.black,
                  thickness: 1.0,
                ),
                const SizedBox(height: 10),
                Row(
                  children: [
                    const Expanded(
                      child: Text(
                        'SFDC ID : ',
                        style: TextStyle(fontSize: 20),
                      ),
                    ),
                    edit
                        ? Expanded(
                            child: TextFormField(
                              decoration: const InputDecoration(
                                counterStyle: TextStyle(fontSize: 30),
                                contentPadding: EdgeInsets.symmetric(
                                    horizontal: 20, vertical: 0),
                                border: OutlineInputBorder(
                                  borderSide: BorderSide(
                                      style: BorderStyle.solid,
                                      width: 2,
                                      color: Colors.black),
                                ),
                              ),
                            controller: ssid,
                            ),
                          )
                        : Expanded(
                          child: Container(
                            height: 45,
                            padding:const EdgeInsets.symmetric(vertical: 8),
                            child:const Text('ssid',style: TextStyle(fontSize: 20),)),                           
                          ),
                  ],
                ),
                const SizedBox(height: 10),
                Row(
                  children: [
                    const Expanded(
                      child: Text(
                        'Account Name : ',
                        style: TextStyle(fontSize: 20),
                      ),
                    ),
                    edit?
                    Expanded(
                      child: TextFormField(
                        decoration: const InputDecoration(
                            counterStyle: TextStyle(fontSize: 30),
                            hintText: 'Company 10',
                            contentPadding: EdgeInsets.symmetric(
                                horizontal: 20, vertical: 0),
                            border: OutlineInputBorder(
                                borderSide: BorderSide(
                                    style: BorderStyle.solid,
                                    width: 2,
                                    color: Colors.black))),
                            controller: accountName,
                      ),
                    )
                    :Expanded(
                          child: Container(
                            height: 45,
                            padding:const EdgeInsets.symmetric(vertical: 8),
                            child:const Text('company 10',style: TextStyle(fontSize: 20),)),                           
                          ),
                  ],
                ),
                const SizedBox(height: 10),
                Row(
                  children: [
                    const Expanded(
                      child: Text(
                        'Opportunity Name : ',
                        style: TextStyle(fontSize: 20),
                      ),
                    ),
                    edit?
                    Expanded(
                      child: TextFormField(
                        decoration: const InputDecoration(
                            counterStyle: TextStyle(fontSize: 30),
                            hintText: 'Opportunity Description',
                            contentPadding: EdgeInsets.symmetric(
                                horizontal: 20, vertical: 0),
                            border: OutlineInputBorder(
                                borderSide: BorderSide(
                                    style: BorderStyle.solid,
                                    width: 2,
                                    color: Colors.black))),
                                    controller: opportunityName,
                      ),
                    )
                    :Expanded(
                          child: Container(
                            height: 45,
                            padding:const EdgeInsets.symmetric(vertical: 8),
                            child:const Text('Opportunity Description',style: TextStyle(fontSize: 20),)),                           
                          ),
                  ],
                ),
                const SizedBox(height: 10),
                Row(
                  children: [
                    const Expanded(
                      child: Text(
                        'TVC  : ',
                        style: TextStyle(fontSize: 20),
                      ),
                    ),
                    edit?
                    Expanded(
                      child: TextFormField(
                        decoration: const InputDecoration(
                            counterStyle: TextStyle(fontSize: 30),
                            hintText: '\$ 5million',
                            contentPadding: EdgeInsets.symmetric(
                                horizontal: 20, vertical: 0),
                            border: OutlineInputBorder(
                                borderSide: BorderSide(
                                    style: BorderStyle.solid,
                                    width: 2,
                                    color: Colors.black))),
                                    controller: tvc,
                      ),
                    )
                    :Expanded(
                          child: Container(
                            height: 45,
                            padding:const EdgeInsets.symmetric(vertical: 8),
                            child:const Text('\$ 5million',style: TextStyle(fontSize: 20),)),                           
                          ),
                  ],
                ),
                const SizedBox(height: 10),
                Row(
                  children: [
                    const Expanded(
                      child: Text(
                        'Duration : ',
                        style: TextStyle(fontSize: 20),
                      ),
                    ),
                    edit?
                    Expanded(
                      child: TextFormField(
                        decoration: const InputDecoration(
                            counterStyle: TextStyle(fontSize: 30),
                            hintText: '6 months',
                            contentPadding: EdgeInsets.symmetric(
                                horizontal: 20, vertical: 0),
                            border: OutlineInputBorder(
                                borderSide: BorderSide(
                                    style: BorderStyle.solid,
                                    width: 2,
                                    color: Colors.black))),
                                    controller: duration,
                      ),
                    )
                    :Expanded(
                          child: Container(
                            height: 45,
                            padding:const EdgeInsets.symmetric(vertical: 8),
                            child:const Text('6 months',style: TextStyle(fontSize: 20),)),                           
                          ),
                  ],
                ),
                const SizedBox(height: 10),
                Row(
                  children: [
                    const Expanded(
                      child: Text(
                        'Deal Type : ',
                        style: TextStyle(fontSize: 20),
                      ),
                    ),
                    edit?
                    Expanded(
                      child: DropdownButton<String>(
                        hint: const Text('EN'),
                        value: selectedItem1,
                        items: dropdownItems1.map((String item) {
                          return DropdownMenuItem<String>(
                            value: item,
                            child: Text(item),
                          );
                        }).toList(),
                        onChanged: (String? newValue) {
                          setState(() {
                            selectedItem1 = newValue!;
                          });
                        },
                      ),
                    )
                    :Expanded(
                          child: Container(
                            height: 45,
                            padding:const EdgeInsets.symmetric(vertical: 8),
                            child:const Text('EN',style: TextStyle(fontSize: 20),)),                           
                          )
                  ],
                ),
                const SizedBox(height: 10),
                Row(
                  children: [
                    const Expanded(
                      child: Text(
                        'Vertical : ',
                        style: TextStyle(fontSize: 20),
                      ),
                    ),
                    edit?
                    Expanded(
                      child: DropdownButton<String>(
                        hint: const Text('HTM'),
                        value: selectedItem2,
                        items: dropdownItems2.map((String item) {
                          return DropdownMenuItem<String>(
                            value: item,
                            child: Text(item),
                          );
                        }).toList(),
                        onChanged: (String? newValue) {
                          setState(() {
                            selectedItem2 = newValue!;
                          });
                        },
                      ),
                    )
                    :Expanded(
                          child: Container(
                            height: 45,
                            padding:const EdgeInsets.symmetric(vertical: 8),
                            child:const Text('HTM',style: TextStyle(fontSize: 20),)),                           
                          )
                  ],
                ),
                const SizedBox(height: 10),
                Row(
                  children: [
                    const Expanded(
                      child: Text(
                        'Region : ',
                        style: TextStyle(fontSize: 20),
                      ),
                    ),
                    edit?
                    Expanded(
                      child: DropdownButton<String>(
                        hint: const Text('West'),
                        value: selectedItem3,
                        items: dropdownItems3.map((String item) {
                          return DropdownMenuItem<String>(
                            value: item,
                            child: Text(item),
                          );
                        }).toList(),
                        onChanged: (String? newValue) {
                          setState(() {
                            selectedItem3 = newValue!;
                          });
                        },
                      ),
                    )
                    :Expanded(
                          child: Container(
                            height: 45,
                            padding:const EdgeInsets.symmetric(vertical: 8),
                            child:const Text('West',style: TextStyle(fontSize: 20),)),                           
                          )
                  ],
                ),
                const SizedBox(height: 10),
                Row(
                  children: [
                    const Expanded(
                      child: Text(
                        'Bid Submission Date : ',
                        style: TextStyle(fontSize: 20),
                      ),
                    ),
                    edit?
                    Expanded(
                      child: TextFormField(
                        onTap: () => showDatePicker(
                                context: context,
                                initialDate: DateTime.now(),
                                firstDate: DateTime(2023, 1, 1),
                                lastDate: DateTime(2024, 1, 1))
                            .then((value) => dateController.text =
                                DateFormat('dd/MM/yyyy')
                                    .format(value ?? DateTime.now())
                                    .toString()),
                        controller: dateController,
                        decoration: const InputDecoration(
                            counterStyle: TextStyle(fontSize: 30),
                            hintText: '05/08/2000',
                            suffixIcon: Icon(Icons.date_range),
                            contentPadding: EdgeInsets.symmetric(
                                horizontal: 20, vertical: 0),
                            border: OutlineInputBorder(
                                borderSide: BorderSide(
                                    style: BorderStyle.solid,
                                    width: 2,
                                    color: Colors.black))),
                      ),
                    )
                    :Expanded(
                          child: Container(
                            height: 45,
                            padding:const EdgeInsets.symmetric(vertical: 8),
                            child:const Text('05/08/2000',style: TextStyle(fontSize: 20),)),                           
                          ),
                  ],
                ),
                const SizedBox(height: 10),
                Row(
                  children: [
                    const Expanded(
                      child: Text(
                        'Service Line : ',
                        style: TextStyle(fontSize: 20),
                      ),
                    ),
                    edit?
                    Expanded(
                      child: DropdownButton<String>(
                        hint: const Text('AES'),
                        value: selectedItem4,
                        items: dropdownItems4.map((String item) {
                          return DropdownMenuItem<String>(
                            value: item,
                            child: Text(item),
                          );
                        }).toList(),
                        onChanged: (String? newValue) {
                          setState(() {
                            selectedItem4 = newValue!;
                          });
                        },
                      ),
                    )
                    :Expanded(
                          child: Container(
                            height: 45,
                            padding:const EdgeInsets.symmetric(vertical: 8),
                            child:const Text('AES',style: TextStyle(fontSize: 20),)),                           
                          )
                  ],
                ),
                const SizedBox(height: 10),
                Row(
                  children: [
                    const Expanded(
                      child: Text(
                        'Office : ',
                        style: TextStyle(fontSize: 20),
                      ),
                    ),
                    edit?
                    Expanded(
                      child: TextFormField(
                        decoration: const InputDecoration(
                            counterStyle: TextStyle(fontSize: 30),
                            hintText: 'Bid Management Office',
                            contentPadding: EdgeInsets.symmetric(
                                horizontal: 20, vertical: 0),
                            border: OutlineInputBorder(
                                borderSide: BorderSide(
                                    style: BorderStyle.solid,
                                    width: 2,
                                    color: Colors.black))),
                                    controller: office,
                      ),
                    )
                    :Expanded(
                          child: Container(
                            height: 45,
                            padding:const EdgeInsets.symmetric(vertical: 8),
                            child:const Text('Bid Management Office',style: TextStyle(fontSize: 20),)),                           
                          ),
                  ],
                ),
                const SizedBox(height: 10),
                Row(
                  children: [
                    const Expanded(
                      child: Text(
                        'Sale Owner : ',
                        style: TextStyle(fontSize: 20),
                      ),
                    ),
                    edit?
                    Expanded(
                      child: TextFormField(
                        decoration: const InputDecoration(
                            counterStyle: TextStyle(fontSize: 30),
                            hintText: 'Hemanth Kumar',
                            contentPadding: EdgeInsets.symmetric(
                                horizontal: 20, vertical: 0),
                            border: OutlineInputBorder(
                                borderSide: BorderSide(
                                    style: BorderStyle.solid,
                                    width: 2,
                                    color: Colors.black))),
                                    controller: salesOwner,
                      ),
                    )
                    :Expanded(
                          child: Container(
                            height: 45,
                            padding:const EdgeInsets.symmetric(vertical: 8),
                            child:const Text('Hemanth Kumar',style: TextStyle(fontSize: 20),)),                           
                          ),
                  ],
                ),
                const SizedBox(height: 10),
                Row(
                  children: [
                    const Expanded(
                      child: Text(
                        'Deal Owner : ',
                        style: TextStyle(fontSize: 20),
                      ),
                    ),
                    edit?
                    Expanded(
                      child: TextFormField(
                        decoration: const InputDecoration(
                            counterStyle: TextStyle(fontSize: 30),
                            hintText: 'Rakesh Reddy',
                            contentPadding: EdgeInsets.symmetric(
                                horizontal: 20, vertical: 0),
                            border: OutlineInputBorder(
                                borderSide: BorderSide(
                                    style: BorderStyle.solid,
                                    width: 2,
                                    color: Colors.black))),
                                    controller: dealOwner,
                      ),
                    )
                    :Expanded(
                          child: Container(
                            height: 45,
                            padding:const EdgeInsets.symmetric(vertical: 8),
                            child:const Text('Rakesh Reddy',style: TextStyle(fontSize: 20),)),                           
                          ),
                  ],
                ),
                const SizedBox(height: 20),
                const Divider(
                  color: Colors.black,
                  thickness: 1.0,
                ),
                ElevatedButton(
                    onPressed: () {
                      Navigator.of(context).push(MaterialPageRoute(
                        builder:(context) => const AdditionalDetails(),));
                      print('Button clicked!');
                    },
                    style: ElevatedButton.styleFrom(
                      foregroundColor: Colors.white,
                      backgroundColor: Colors.blue,
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(
                            8), // Set the button's border radius
                      ),
                    ),
                    child: const Text(
                      'Save & Continue',
                      style: TextStyle(fontSize: 20),
                    ) // The text displayed on the button
                    )
              ],
            ),
          ]),
        ),
      ),
    );
  }
}
