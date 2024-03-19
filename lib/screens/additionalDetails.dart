import 'package:flutter/material.dart';

class AdditionalDetails extends StatefulWidget {
  const AdditionalDetails({super.key});

  @override
  State<AdditionalDetails> createState() => _AdditionalDetailsState();
}

class _AdditionalDetailsState extends State<AdditionalDetails> {
  bool isChecked1 = false;
  bool isChecked2 = false;
  bool isChecked3 = false;
  bool isChecked4 = false;
  bool isChecked5 = false;
  List<String> dropdownItems = [
    'Harry Porter',
    'Hermoine Granger',
    'Ron Wheasly',
    'Draco Molfy'
  ];
  String? selectedItem;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        color: Colors.white,
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: ListView(children: [
             Column(mainAxisAlignment: MainAxisAlignment.start, children: [
              const SizedBox(height: 40),
              Row(children: [
                IconButton(onPressed: (){
                  Navigator.of(context).pop();
                }, icon: const Icon(Icons.arrow_back)),
                const Text(
                  ' Additional Details',
                  style: TextStyle(
                      color: Colors.black,
                      fontSize: 25,
                      decoration: TextDecoration.none),
                ),
                const SizedBox(width: 80),
                IconButton(onPressed: () {}, icon: const Icon(Icons.edit)),
                const Text(
                  'EDIT',
                  style: TextStyle(
                      color: Colors.black,
                      fontSize: 20,
                      fontStyle: FontStyle.italic,
                      decoration: TextDecoration.none),
                ),
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
                      'Alliance Partner',
                      style: TextStyle(fontSize: 21),
                    ),
                  ),
                  Expanded(
                      child: TextFormField(
                    decoration: const InputDecoration(
                        border: OutlineInputBorder(
                            borderSide: BorderSide(
                                color: Colors.black,
                                width: 1,
                                style: BorderStyle.solid))),
                  ))
                ],
              ),
              const SizedBox(
                height: 10,
              ),
              Row(
                children: [
                  Checkbox(
                    checkColor: Colors.white,
                    value: isChecked1,
                    shape: const CircleBorder(),
                    onChanged: (bool? value) {
                      setState(() {
                        isChecked1 = value!;
                        isChecked2=false;
                      });
                    },
                  ),
                  const Text(
                    'Sell with',
                    style: TextStyle(fontSize: 21),
                  ),
                  Checkbox(
                    checkColor: Colors.white,
                    value: isChecked2,
                    shape: const CircleBorder(),
                    onChanged: (bool? value) {
                      setState(() {
                        isChecked2 = value!;
                        isChecked1=false;
                      });
                    },
                  ),
                  const Text(
                    'Sell through',
                    style: TextStyle(fontSize: 21),
                  ),
                ],
              ),
              const SizedBox(
                height: 20,
              ),
              Row(
                children: [
                  const Expanded(
                    child: Text(
                      'Advisor',
                      style: TextStyle(fontSize: 21),
                    ),
                  ),
                  Expanded(
                      child: TextFormField(
                    decoration: const InputDecoration(
                        border: OutlineInputBorder(
                            borderSide: BorderSide(
                                color: Colors.black,
                                width: 1,
                                style: BorderStyle.solid))),
                  ))
                ],
              ),
              Row(
                children: [
                  Checkbox(
                    checkColor: Colors.white,
                    value: isChecked3,
                    shape: const CircleBorder(),
                    onChanged: (bool? value) {
                      setState(() {
                        isChecked3 = value!;
                      });
                    },
                  ),
                  const Text(
                    'Sell with',
                    style: TextStyle(fontSize: 21),
                  ),
                ],
              ),
              const SizedBox(
                height: 10,
              ),
              Row(
                children: [
                  const Expanded(
                    child: Text(
                      'Incumbent/Competition',
                      style: TextStyle(fontSize: 21),
                    ),
                  ),
                  Expanded(
                      child: TextFormField(
                    decoration: const InputDecoration(
                        border: OutlineInputBorder(
                            borderSide: BorderSide(
                                color: Colors.black,
                                width: 1,
                                style: BorderStyle.solid))),
                  ))
                ],
              ),
              const SizedBox(
                height: 30,
              ),
              Row(
                children: [
                  const Expanded(
                    child: Text(
                      'Playbook',
                      style: TextStyle(fontSize: 21),
                    ),
                  ),
                  Expanded(
                      child: TextFormField(
                    decoration: const InputDecoration(
                        border: OutlineInputBorder(
                            borderSide: BorderSide(
                                color: Colors.black,
                                width: 1,
                                style: BorderStyle.solid))),
                  ))
                ],
              ),
              const SizedBox(
                height: 20,
              ),
              Row(
                children: [
                  const Text(
                    'Solutioning Required',
                    style: TextStyle(fontSize: 21),
                  ),
                  Checkbox(
                    checkColor: Colors.white,
                    value: isChecked4,
                    shape: const CircleBorder(),
                    onChanged: (bool? value) {
                      setState(() {
                        isChecked4 = value!;
                        isChecked5=false;
                      });
                    },
                  ),
                  const Text(
                    'Yes',
                    style: TextStyle(fontSize: 21),
                  ),
                  Checkbox(
                    checkColor: Colors.white,
                    value: isChecked5,
                    shape: const CircleBorder(),
                    onChanged: (bool? value) {
                      setState(() {
                        isChecked5 = value!;
                        isChecked4=false;
                      });
                    },
                  ),
                  const Text(
                    'No',
                    style: TextStyle(fontSize: 21),
                  ),
                ],
              ),
              const SizedBox(
                height: 30,
              ),
              Row(
                children: [
                  const Expanded(
                    child: Text(
                      'Lead Solution Architect',
                      style: TextStyle(fontSize: 21),
                    ),
                  ),
                  Expanded(
                    child: Container(
                      height:55,
                      //width: 0,
                      decoration: BoxDecoration(
                        border: Border.all(color: Colors.grey),
                        borderRadius: BorderRadius.circular(8),
                      ),
                      child: Padding(
                        padding: const EdgeInsets.all(3),
                        child: DropdownButton<String>(
                          hint: const Text('Select'),
                          value: selectedItem,
                          isExpanded: true,
                           underline: SizedBox(),
                          items: dropdownItems.map((String item) {
                            return DropdownMenuItem<String>(
                              value: item,
                              child: Text(item),
                            );
                          }).toList(),
                          onChanged: (String? newValue) {
                            setState(() {
                              selectedItem = newValue!;
                            });
                          },
                        ),
                      ),
                    ),
                  )
                ],
              ),
              const SizedBox(height: 180),
              const Divider(
                color: Colors.black,
                thickness: 1.0,
              ),
              ElevatedButton(
                onPressed: () {},
                style: ElevatedButton.styleFrom(
                  foregroundColor: Colors.white,
                  backgroundColor: Colors.blue,
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(8),
                  ),
                ),
                child: const Text(
                  'Save & Continue',
                  style: TextStyle(fontSize: 20),
                ),
              )
            ]),
          ],
          ),
        ),
      ),
    );
  }
}
