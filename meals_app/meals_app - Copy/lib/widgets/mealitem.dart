import 'package:flutter/material.dart';
import 'package:meals_app/models/meal.dart';
import 'package:transparent_image/transparent_image.dart';

class MealItem extends StatelessWidget {
  const MealItem({super.key,
  required this.meal});
  //7.1

  final Meal meal;
  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
          //Image.network(meal.imageUrl),
          FadeInImage(
            placeholder: MemoryImage(kTransparentImage),
            image: NetworkImage(meal.imageUrl),
            fit: BoxFit.cover,
            height: 200,
            width: double.infinity,
            ),
          Positioned(
            bottom: 0,
            left:0,
            right:0,
            child: Container(
              color: Colors.black54,
              padding: const EdgeInsets.symmetric(vertical: 6, horizontal: 44),
              child: Column(

                children: [

                  Text(

                  meal.title,

                  textAlign: TextAlign.center,

                  overflow: TextOverflow.ellipsis,// very long text ...

                  style: const TextStyle(

                    fontSize:20,

                    fontWeight: FontWeight.bold,

                    color:Colors.white

                  ),),
                  const SizedBox(height: 10,),
                ]),
            ),

          )

      ],);

  }

}