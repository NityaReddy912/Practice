import 'package:flutter/material.dart';
import 'package:meals_app/data/dummy_data.dart';
import 'package:meals_app/models/category.dart';
import 'package:meals_app/screens/meals.dart';
import 'package:meals_app/widgets/category_grid_item.dart';

class Categories extends StatelessWidget {

  const Categories({super.key});
  
    void _selectedCategory(BuildContext context, Category category){
      final filtered_meals= dummyMeals.
      where((meal) => meal.categories.contains(category.id)).toList();
    Navigator.of(context).push(
      MaterialPageRoute(builder: (ctx) =>  Meals(meals:filtered_meals),)
    );

  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title:const Text('Pick your Category'),
      ),
      body:GridView(
        padding: const EdgeInsets.all(24),
        gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 2,
          childAspectRatio: 3/2,
          crossAxisSpacing: 20,
          mainAxisSpacing: 20 ),
        children:  [
          for(final item in availableCategories)
            CategoryGridItem(category: item, onSelectCategory: _selectedCategory)
        ],)

    );

  }

}


// import 'package:flutter/material.dart';

// class Categories extends StatelessWidget {

//   const Categories({super.key});




//   @override

//   Widget build(BuildContext context) {

//     return Scaffold(

//       appBar: AppBar(

//         title:const Text('Pick your Category'),

//       ),

//       body:GridView(

//         padding: const EdgeInsets.all(24),

//         gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(

//           crossAxisCount: 2,

//           childAspectRatio: 3/2,

//           crossAxisSpacing: 20,

//           mainAxisSpacing: 20 ),

//         children: const [

//           Text('Asian',style: TextStyle(color:Colors.white,fontSize: 20),),

//           Text('Italian',style: TextStyle(color:Colors.white,fontSize: 20),),

//           Text('Quick and Easy',style: TextStyle(color:Colors.white,fontSize: 20),),

//           Text('German',style: TextStyle(color:Colors.white,fontSize: 20),),

//           Text('Exotic',style: TextStyle(color:Colors.white,fontSize: 20),),

//           Text('French',style: TextStyle(color:Colors.white,fontSize: 20),),

//         ],)

//     );

//   }

// }