import 'package:flutter/material.dart';

class CustomAppBar extends StatelessWidget implements PreferredSizeWidget {
  const CustomAppBar({super.key});

  @override
  Size get preferredSize => const Size.fromHeight(kToolbarHeight);

  @override
  Widget build(BuildContext context) {
    return AppBar(
      title: const Text.rich(TextSpan(
          text: 'ZEN',
          style: TextStyle(
            fontSize: 23,
            fontWeight: FontWeight.w700,
          ),
          children: [
            TextSpan(
              text: 'D',
              style: TextStyle(
                  fontWeight: FontWeight.w700,
                  fontSize: 23,
                  color: Colors.pink),
            ),
            TextSpan(
              text: 'Q',
              style: TextStyle(
                  fontWeight: FontWeight.w700,
                  fontSize: 23,
                  color: Colors.green),
            )
          ])),
      backgroundColor: const Color.fromARGB(255, 36, 8, 100),
      actions: const [
        Icon(
          Icons.notifications,
          size: 30,
        ),
        SizedBox(
          width: 15,
        ),
        Icon(
          Icons.account_circle_rounded,
          size: 30,
        ),
        SizedBox(
          width: 15,
        ),
      ],
    );
  }
}
