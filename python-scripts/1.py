#Create good script to create new list, which only contains users from Poland. Try to do it with List Comprehension.

users = [{"name": "Kamil", "country":"Poland"}, {"name":"John", "country": "USA"}, {"name":"Yeti"}]

polish_people = [person for person in users if person.get("country") == "Poland"]
print(polish_people)