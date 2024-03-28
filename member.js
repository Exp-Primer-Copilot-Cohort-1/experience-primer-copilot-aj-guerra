function skillsMember() {
  var skills = ["HTML", "CSS", "JavaScript", "Python", "Java", "C++", "C#"];
  var member = {
    name: "John",
    age: 25,
    skills: skills,
    printSkills: function() {
      this.skills.forEach(function(skill) {
        console.log(skill);
      });
    }
  };
  return member;
}