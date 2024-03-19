import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:meals_app/screens/categories.dart';
import 'package:meals_app/screens/meals.dart';
import 'package:meals_app/widgets/category_grid_item.dart';

final theme=ThemeData(
  useMaterial3: true,
  colorScheme: ColorScheme.fromSeed(
    brightness: Brightness.light,
    seedColor: const Color.fromARGB(123, 183, 254, 82)),
    textTheme: GoogleFonts.bevanTextTheme(),
 );
void main() {
  runApp(const App());
}

class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: theme,
      // home: const Center(child: Text('Meals YAAp!'),),
      // home: const  Categories(),
      // home: const Meals(
      //   meals: [],
      // ),
      home:const  Categories()
    );
  }
}




// import 'package:flutter/material.dart';
// import 'package:google_fonts/google_fonts.dart';

// final theme = ThemeData(

//   useMaterial3: true,

//   colorScheme: ColorScheme.fromSeed(

//     brightness: Brightness.dark,

//     seedColor: const Color.fromARGB(255, 207, 233, 166),

//   ),

//   //textTheme: GoogleFonts.latoTextTheme(),

// );

// void main() {

//   runApp(const App());

// }

// class App extends StatelessWidget {
//   const App({super.key});
//   @override

//   Widget build(BuildContext context) {

//     return MaterialApp(
//       theme: theme,
//       home: Scaffold(
//         body: CustomScrollView(slivers: [
//           const SliverAppBar(

//             actions: [

//               Icon(

//                 Icons.person,

//                 size: 40,

//               ),

//             ],

//             title: Text('SliverAppBar Demo'),

//             leading: Icon(Icons.menu),

//             backgroundColor: Colors.green,

//             expandedHeight: 100.0,

//             floating: true,

//             pinned: true,

//           ),

//           // SliverList(

//           //   delegate: SliverChildListDelegate(_buildList(20)),

//           // ),

//           SliverGrid(

//             delegate: SliverChildBuilderDelegate((BuildContext context, int index){

//               return Container(

//                 color: _randomPaint(index),

//                 height:150.0

//               );

//             }),

//             gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(

//               crossAxisCount: 4 ))

         

//         ]),

//       ),

//     );

//   }

//   List<Widget> _buildList(int count){

//     List<Widget> listItems = [];




//     for(int i=1;i<=count;i++){

//       listItems.add(Padding(padding: const EdgeInsets.all(16.0),

//       child:Text('Sliver Item ${i.toString()}',

//       style:const TextStyle(fontSize: 22),),

//       ),

//       );

//     }

//     return listItems;

//   }

//   Color _randomPaint(int index){

//     if(index % 3 == 0){

//       return Colors.orange;

//     }else if(index % 3 == 1){

//       return Colors.blue;

//     }

//     return Colors.red;

//   }

// }