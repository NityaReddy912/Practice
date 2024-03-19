import 'package:flutter/material.dart';
import 'package:zendq/data/open_system_decisions.dart';
import 'package:zendq/widgets/nav/app_bar.dart';
import 'package:zendq/widgets/nav/drawer.dart';
import 'package:zendq/widgets/reports/open_system_decisions.dart';
import 'package:zendq/widgets/oppurtunityPage/create_opportunity.dart';
import 'package:zendq/widgets/salespage/table.dart';

class SalesHomePage extends StatelessWidget {
  const SalesHomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const CustomAppBar(),
      drawer: const CustomDrawer(),
      body: SingleChildScrollView(
        child: Container(
            padding: const EdgeInsets.all(20),
            child: Column(
              
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.end,
              
              children: [
                const SizedBox(
                    height: 40,
                    width: double.infinity,
                    child: Text(
                      "Welcome Indu!",
                      style:
                          TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                    )),
                SizedBox(
                  height: 40,
                  width: double.infinity,
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.end,
                    children: [
                      ElevatedButton.icon(
                          onPressed: () {
                            Navigator.push(
                                context,
                                MaterialPageRoute(
                                    builder: (ctx) => const CreateOpportunity()));
                          },
                          icon: const Icon(Icons.add),
                          label: const Text("Create New Opportunity"))
                    ],
                  ),
                ),
                const SizedBox(
                  height: 15,
                ),
                SizedBox(
                  width: 460,
                  height: 230,
                  child: PageView.builder(
                      scrollDirection: Axis.horizontal,
                      itemCount: reports.length,
                      itemBuilder: (ctx, index) {
                        return Padding(
                          padding: const EdgeInsets.symmetric(horizontal: 7),
                          child: ReportStatus(reports: reports[index]),
                        );
                      }),
                ),
                const SizedBox(
                  height: 15,
                ),

                const CustomTableSales()

                // Container(
                //   height: 70,
                //   width: double.infinity,
                //   // color: Colors.amber,
                //   child: Column(
                //     mainAxisAlignment: MainAxisAlignment.center,
                //     crossAxisAlignment: CrossAxisAlignment.start,
                //     children: [
                //       Text(
                //         "My Pending Actions",
                //         style: TextStyle(
                //             fontSize: 16,
                //             fontWeight: FontWeight.w700,
                //             color: Colors.red.shade500),
                //       ),
                //       const SizedBox(
                //         height: 6,
                //       ),
                //       Container(
                //         alignment: Alignment.center,
                //         height: 40,
                //         width: 190,
                //         decoration: BoxDecoration(
                //             borderRadius: BorderRadius.circular(10),
                //             border: Border.all(color: Colors.grey.shade400),
                //             color: Colors.grey.shade200),
                //         child: Text.rich(
                //           TextSpan(
                //               text: "2     ",
                //               style: TextStyle(
                //                   fontSize: 18,
                //                   fontWeight: FontWeight.w500,
                //                   color: Colors.blue.shade700),
                //               children: [
                //                 TextSpan(
                //                     text: "Sales input pending",
                //                     style: TextStyle(
                //                         fontSize: 14,
                //                         fontWeight: FontWeight.w500,
                //                         color: Colors.blue.shade700))
                //               ]),
                //         ),
                //       ),
                //     ],
                //   ),
                // ),
                // const SizedBox(
                //   height: 10,
                // ),
                // Container(
                //   // color: Colors.amber,
                //   height: 80,
                //   width: double.infinity,
                //   child: Column(
                //     mainAxisAlignment: MainAxisAlignment.center,
                //     crossAxisAlignment: CrossAxisAlignment.start,
                //     children: [
                //       const Text(
                //         "My Pending Actions with Others",
                //         style: TextStyle(
                //           fontSize: 14,
                //           fontWeight: FontWeight.w700,
                //         ),
                //       ),
                //       const SizedBox(
                //         height: 6,
                //       ),
                //       Row(
                //         mainAxisAlignment: MainAxisAlignment.spaceBetween,
                //         children: [
                //           Container(
                //             alignment: Alignment.center,
                //             height: 50,
                //             width: 180,
                //             decoration: BoxDecoration(
                //                 borderRadius: BorderRadius.circular(10),
                //                 border: Border.all(color: Colors.grey.shade400),
                //                 color: Colors.grey.shade200),
                //             child: Text.rich(
                //               TextSpan(
                //                   text: "1   ",
                //                   style: TextStyle(
                //                       fontSize: 18,
                //                       fontWeight: FontWeight.w500,
                //                       color: Colors.blue.shade700),
                //                   children: [
                //                     TextSpan(
                //                         text: "Deal owner unassigned",
                //                         style: TextStyle(
                //                             fontSize: 12,
                //                             fontWeight: FontWeight.w500,
                //                             color: Colors.blue.shade700))
                //                   ]),
                //             ),
                //           ),
                //           Container(
                //             alignment: Alignment.center,
                //             height: 50,
                //             width: 180,
                //             decoration: BoxDecoration(
                //                 borderRadius: BorderRadius.circular(10),
                //                 border: Border.all(color: Colors.grey.shade400),
                //                 color: Colors.grey.shade200),
                //             child: Text.rich(
                //               TextSpan(
                //                   text: "2   ",
                //                   style: TextStyle(
                //                       fontSize: 18,
                //                       fontWeight: FontWeight.w500,
                //                       color: Colors.blue.shade700),
                //                   children: [
                //                     TextSpan(
                //                         text: "Deal owner inputs pending",
                //                         style: TextStyle(
                //                             fontSize: 12,
                //                             fontWeight: FontWeight.w500,
                //                             color: Colors.blue.shade700))
                //                   ]),
                //             ),
                //           ),
                //         ],
                //       )
                //     ],
                //   ),
                // )
              ],
            )),
      ),
    );
  }
}
