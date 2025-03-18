import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:eventbite/screens/auth/login_screen.dart';
import 'package:eventbite/screens/auth/register_screen.dart';
import 'package:eventbite/screens/home_screen.dart';
import 'package:eventbite/screens/events_screen.dart';
import 'package:eventbite/screens/event_detail_screen.dart';
import 'firebase_options.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(options: DefaultFirebaseOptions.currentPlatform);

  runApp(const FirebaseApp());
}

class FirebaseApp extends StatelessWidget {
  const FirebaseApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Firebase App',
      theme: ThemeData(primarySwatch: Colors.blue),
      initialRoute: '/home',
      routes: {
        '/home': (context) => HomeScreen(),
        '/login': (context) => LoginScreen(),
        '/register': (context) => RegisterScreen(),
        '/events': (context) => EventsScreen(),
        '/eventDetails': (context) => EventDetailsScreen(),
      },
    );
  }
}
