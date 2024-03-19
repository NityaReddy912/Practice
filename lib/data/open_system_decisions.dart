import 'package:flutter/material.dart';
import 'package:zendq/models/open_system_decisions.dart';

List<Reports> reports = [
  Reports(
      header: "Open Opportunities",
      headerNumber: "4",
      inputNumber1: "3",
      inputNumber2: "1",
      inputTitle1: "Inputs in Progress",
      inputTitle2: "Decisions Pending",
      colors: Colors.amber.shade400),
  Reports(
    header: "System Recommendations",
    headerNumber: "",
    inputNumber1: "60",
    inputNumber2: "16",
    inputTitle1: "System Qualified",
    inputTitle2: "System Rejected",
    colors: Colors.blue.shade200,
  ),
  Reports(
    header: "Decisions",
    headerNumber: "96",
    inputNumber1: "84",
    inputNumber2: "12",
    inputTitle1: "Bid",
    inputTitle2: "Bid",
    colors: Colors.green.shade300,
  ),
];
