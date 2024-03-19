import 'package:flutter/material.dart';

class OpportunityDetailsScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
         backgroundColor: Colors.white,
         title: const Text("Opportunity Details",
         style:TextStyle(color: Colors.black)),
          actions: [
            IconButton(
              icon: const Icon(
                Icons.close,
                color: Colors.black, // Set the color to black
              ),
              onPressed: () {
                Navigator.of(context).pop();
              },
            ),
          ],
         centerTitle: true,),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            
            formRow('SFDC ID', 'Value 1'),
            formRow('Account Name', 'Value 2'),
            formRow('TCV', 'Value 3'),
            formRow('Duration', 'Value 4'),
            formRow('Deal Type', 'Value 5'),
            formRow('Vertical', 'Value 6'),
            formRow('Region', 'Value 7'),
            formRow('Bid Submission Date', 'Value 8'),
            formRow('Service Line', 'Value 9'),
            formRow('Office', 'Value 10'),
            formRow('Sale Owner', 'Value 11'),
            formRow('Deal Owner', 'Value 12'),
            
            const Divider(
              color: Colors.black87,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                ElevatedButton(
                  style: ButtonStyle(
                    backgroundColor: MaterialStateProperty.all<Color>(Colors.green),
                  ),
                  onPressed: () async {
                    String? selectedOffice = await showDialog(
                      context: context,
                      builder: (context) {
                        String? selectedValue;
                        return AlertDialog(
                          title: const Center( // Center the title
                            child: Text(
                              'Change Office',
                              textAlign: TextAlign.center, // Align the title to center
                            ),
                          ),
                          content: DropdownButton<String>(
                            value: selectedValue,
                            hint: Text('Change an Office'), // Placeholder
                            onChanged: (newValue) {
                              selectedValue = newValue!;
                            },
                            items: <String>['Office 1', 'Office 2', 'Office 3', 'Office 4']
                                .map((String value) {
                              return DropdownMenuItem<String>(
                                value: value,
                                child: value.isEmpty ? const Center(child: Text('Change an Office')) : Text(value),
                              );
                            }).toList(),
                          ),
                          actions: [
                            Center( // Center the buttons
                              child: Row(
                                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                                children: [
                                  TextButton(
                                    onPressed: () {
                                      Navigator.of(context).pop();
                                    },style: ButtonStyle(backgroundColor: MaterialStateProperty.all<Color>(Colors.black),),
                                    child: const Text('Back',style: TextStyle(color: Colors.white),),
                                  ),
                                  ElevatedButton(
                                    onPressed: () {
                                      Navigator.of(context).pop(selectedValue);
                                    },
                                    style:ButtonStyle(backgroundColor:MaterialStateProperty.all<Color>(Colors.green) ),
                                    child: const Text('Done',style: TextStyle(color: Colors.white),),
                                  ),
                                ],
                              ),
                            ),
                          ],
                        );
                      },
                    );

                    if (selectedOffice != null) {
                      print('Selected Office: $selectedOffice');
                    }
                  },
                  child: const Text('Change Office'),
                ),
                ElevatedButton(
                  
                  onPressed: () async {
                    String? selectedOffice = await showDialog(
                      context: context,
                      builder: (context) {
                        String? selectedValue;
                        return AlertDialog(
                          title: const Center( // Center the title
                            child: Text(
                              'Deal Owner',
                              textAlign: TextAlign.center, 
                            ),
                          ),
                          content: DropdownButton<String>(
                            value: selectedValue,
                            hint: const Text('select'), // Placeholder
                            onChanged: (newValue) {
                              selectedValue = newValue!;
                            },
                            items: <String>['Owner 1', 'Owner 2', 'Owner 3', 'Owner 4']
                                .map((String value) {
                              return DropdownMenuItem<String>(
                                value: value,
                                child: value.isEmpty ? const Center(child: Text('Change an Office')) : Text(value),
                              );
                            }).toList(),
                          ),
                          actions: [
                            Center( // Center the buttons
                              child: Row(
                                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                                children: [
                                  TextButton(
                                    onPressed: () {
                                      Navigator.of(context).pop();
                                    },style: ButtonStyle(backgroundColor: MaterialStateProperty.all<Color>(Colors.black),),
                                    child: const Text('Back',style: TextStyle(color: Colors.white),),
                                  ),
                                  ElevatedButton(
                                    onPressed: () {
                                      Navigator.of(context).pop(selectedValue);
                                    },
                                    style:ButtonStyle(backgroundColor:MaterialStateProperty.all<Color>(Colors.green) ),
                                    child: const Text('Done',style: TextStyle(color: Colors.white),),
                                  ),
                                ],
                              ),
                            ),
                          ],
                        );
                      },
                    );

                    if (selectedOffice != null) {
                      print('Selected Office: $selectedOffice');
                    }
                  },
                  child: const Text('Assign Deal Owner'),
                ),
              ],
            )
          ],
        ),
      ),
    );
  }

  Widget formRow(String field, String value) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8.0),
      child: Row(
        children: [
          Expanded(
            child: Text(
              field,
              style: const TextStyle(fontSize: 25),
            ),
          ),
          Container(
            width: 12, 
            child: Center(
              child: Text(
                ':',
                style: TextStyle(fontSize: 25),
              ),
            ),
          ),
          Expanded(
            child: Text(
              value,
              style: const TextStyle(fontSize: 16),
            ),
          ),
        ],
      ),
    );
  }
}


