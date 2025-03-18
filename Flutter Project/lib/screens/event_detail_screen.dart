import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

class EventDetailsScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final Map<String, String> event =
        ModalRoute.of(context)!.settings.arguments as Map<String, String>;

    return Scaffold(
      appBar: AppBar(
        title: Text(event["title"] ?? "Event Details"),
        backgroundColor: Colors.deepPurple,
      ),
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Event Image
            ClipRRect(
              borderRadius: BorderRadius.vertical(bottom: Radius.circular(20)),
              child: Image.network(
                event["image"] ?? "https://via.placeholder.com/600",
                width: double.infinity,
                height: 250,
                fit: BoxFit.cover,
              ),
            ),

            Padding(
              padding: const EdgeInsets.all(16.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  // Event Title
                  Text(
                    event["title"] ?? "Event Title",
                    style: TextStyle(
                      fontSize: 24,
                      fontWeight: FontWeight.bold,
                      color: const Color.fromARGB(255, 244, 243, 245),
                    ),
                  ),
                  SizedBox(height: 10),

                  // Event Date
                  Row(
                    children: [
                      Icon(Icons.calendar_today, color: Colors.grey[700]),
                      SizedBox(width: 8),
                      Text(
                        event["date"] ?? "Event Date",
                        style: TextStyle(fontSize: 16, color: Colors.grey[700]),
                      ),
                    ],
                  ),
                  SizedBox(height: 10),

                  // Event Location (if available)
                  if (event.containsKey("location")) ...[
                    Row(
                      children: [
                        Icon(Icons.location_on, color: Colors.red),
                        SizedBox(width: 8),
                        Text(
                          event["location"]!,
                          style: TextStyle(
                            fontSize: 16,
                            color: const Color.fromARGB(255, 251, 239, 239),
                          ),
                        ),
                      ],
                    ),
                    SizedBox(height: 10),
                  ],

                  // Event Description
                  Text(
                    event["description"] ??
                        "No description available for this event.",
                    style: TextStyle(fontSize: 16),
                  ),
                  SizedBox(height: 20),

                  // "Book Now" Button
                  Center(
                    child: ElevatedButton(
                      onPressed: () async {
                        await _bookEvent(event);
                        ScaffoldMessenger.of(context).showSnackBar(
                          SnackBar(
                            content: Text("Event booked successfully!"),
                            backgroundColor: Colors.green,
                          ),
                        );
                      },
                      style: ElevatedButton.styleFrom(
                        padding: EdgeInsets.symmetric(
                          horizontal: 40,
                          vertical: 15,
                        ),
                        backgroundColor: const Color.fromARGB(
                          255,
                          169,
                          143,
                          212,
                        ),
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(10),
                        ),
                      ),
                      child: Text(
                        "Book Now",
                        style: TextStyle(
                          fontSize: 18,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  /// Function to store booking data in Firebase Firestore
  Future<void> _bookEvent(Map<String, String> event) async {
    final FirebaseFirestore firestore = FirebaseFirestore.instance;

    await firestore.collection("bookings").add({
      "title": event["title"],
      "date": event["date"],
      "location": event["location"] ?? "Unknown",
      "timestamp": FieldValue.serverTimestamp(),
    });
  }
}
