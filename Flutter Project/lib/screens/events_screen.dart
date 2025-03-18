import 'package:flutter/material.dart';

class EventsScreen extends StatelessWidget {
  final List<Map<String, String>> events = [
    {
      "title": "Tech Conference 2025",
      "date": "April 15, 2025",
      "location": "Silicon Valley, CA",
      "image":
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsbP1SjH7EkE1TXIwAcnjd0wZOTem0iIlysA&s",
      "description":
          "Join top tech leaders in an exclusive conference about AI, Blockchain, and the future of technology.",
    },
    {
      "title": "Music Fest 2025",
      "date": "May 10, 2025",
      "image":
          "https://cdn.shopify.com/s/files/1/0445/3321/9490/files/happy-people-dance-nightclub-party-concert_480x480.jpg?v=1686381835",
    },
    {
      "title": "Food Festival",
      "date": "June 5, 2025",
      "image":
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNMASHGjTs-2w4PvQGHZNjQU5T27S7-PinGQ&s",
    },
    {
      "title": "Sports Championship",
      "date": "July 20, 2025",
      "image":
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvpuBeaAd94id_zjedFz7xxCyo81WfqnwmFA&s",
    },
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Upcoming Events"),
        backgroundColor: Colors.deepPurple,
      ),
      body: Padding(
        padding: const EdgeInsets.all(12.0),
        child: ListView.builder(
          itemCount: events.length,
          itemBuilder: (context, index) {
            return Card(
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(15),
              ),
              elevation: 4,
              margin: EdgeInsets.symmetric(vertical: 10),
              child: InkWell(
                onTap: () {
                  Navigator.pushNamed(
                    context,
                    "/eventDetails",
                    arguments: events[index],
                  );
                },
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    ClipRRect(
                      borderRadius: BorderRadius.vertical(
                        top: Radius.circular(15),
                      ),
                      child: Image.network(
                        events[index]["image"] ??
                            "https://via.placeholder.com/400",
                        height: 200,
                        width: double.infinity,
                        fit: BoxFit.cover,
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.all(12.0),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            events[index]["title"] ?? "Event Title",
                            style: TextStyle(
                              fontSize: 20,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                          SizedBox(height: 5),
                          Text(
                            "Date: ${events[index]["date"]}",
                            style: TextStyle(
                              fontSize: 16,
                              color: Colors.grey[600],
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            );
          },
        ),
      ),
    );
  }
}
