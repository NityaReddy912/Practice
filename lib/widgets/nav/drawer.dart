import 'package:flutter/material.dart';

class CustomDrawer extends StatelessWidget {
  const CustomDrawer({super.key});

  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: ListView(
        children: [
          Container(
            padding: const EdgeInsets.symmetric(vertical: 20),
            height: 120,
            child: const DrawerHeader(
              child: Text.rich(TextSpan(
                  text: 'ZEN',
                  style: TextStyle(
                      fontSize: 29,
                      fontWeight: FontWeight.w800,
                      fontStyle: FontStyle.italic),
                  children: [
                    TextSpan(
                      text: 'D',
                      style: TextStyle(
                          fontWeight: FontWeight.w800,
                          fontSize: 29,
                          fontStyle: FontStyle.italic,
                          color: Colors.pink),
                    ),
                    TextSpan(
                      text: 'Q',
                      style: TextStyle(
                          fontWeight: FontWeight.w800,
                          fontStyle: FontStyle.italic,
                          fontSize: 29,
                          color: Colors.green),
                    )
                  ])),
            ),
          ),
          ListTile(
            onTap: () {},
            title: const Text(
              "Home",
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.w500),
            ),
            leading: const Icon(
              Icons.home_outlined,
              size: 26,
            ),
          ),
          ListTile(
            onTap: () {},
            title: const Text(
              "Dashboard",
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.w500),
            ),
            leading: const Icon(
              Icons.dashboard,
              size: 26,
            ),
          ),
          ListTile(
            onTap: () {},
            title: const Text(
              "Reports",
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.w500),
            ),
            leading: const Icon(
              Icons.file_present_rounded,
              size: 26,
            ),
          ),
          ListTile(
            onTap: () {},
            title: const Text(
              "Opportunities",
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.w500),
            ),
            leading: const Icon(
              Icons.online_prediction_sharp,
              size: 26,
            ),
          ),
        ],
      ),
    );
  }
}
