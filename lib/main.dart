import 'package:flutter/material.dart';
import 'package:zendq/screens/OpportunityDetailsScreen.dart';
import 'package:zendq/widgets/sales_home_page.dart';
import 'package:firebase_core/firebase_core.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  if (Firebase.apps.isNotEmpty) {
    debugPrint('Firebase connected!');
  } else {
    debugPrint('Firebase not connected!');
  }
  runApp(
    const MyApp(),
  );
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      home: SalesHomePage(),
    );
  }
}
