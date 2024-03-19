import 'package:flutter/material.dart';
import 'package:meals_app/data/dummy_data.dart';
import 'package:meals_app/models/meal.dart';
import 'package:meals_app/widgets/mealitem.dart';

class Meals extends StatelessWidget {
  const Meals({super.key, required , required this.meals});
  final List<Meal> meals;

  @override
  Widget build(BuildContext context) {
    Widget content = const Center(
      child: Column(children: [
        Text('Uh oh... nothing here',
          style: TextStyle(fontSize: 20.0),
        ),
        SizedBox(height: 16,),
        Text('Try selecting a different category !',
          style: TextStyle(fontSize: 12, color: Colors.grey),
        )
      ]),
    );

    if (meals.isNotEmpty) {
      content = ListView.builder(
          itemCount: meals.length,
          // itemBuilder: (ctx, index) {
          //   return Text(meals[index].title);
          // }
          // );
          itemBuilder: (ctx, index) =>

          MealItem(meal: meals[index])

          );
    }
    return Scaffold(
      appBar: AppBar(
        title: const Text('Meals'),
      ),
      body: content,
    );
  }
}