$(document).ready(
    function () {
        $("#submit_student").click(submitDetails);

        function submitDetails(event) {
            event.preventDefault();

            var studentGrade =
                {
                    firstName: $("#first_name").val(),
                    lastName: $("#last_name").val(),
                    pointsEarned: parseInt($("#points_earned").val()),
                    pointsPossible: parseInt($("#points_possible").val()),
                }

            var finalGrade = studentGrade.pointsEarned/studentGrade.pointsPossible*100;
            var letterGrade = "";

            if (finalGrade >= 90){
                letterGrade = "A";
            }
            else if (finalGrade >= 80 && finalGrade < 90){
                letterGrade = "B";
            }
            else if (finalGrade >= 70 && finalGrade <80){
                letterGrade = "C";
            }
            else if (finalGrade >= 60 && finalGrade < 70) {
                letterGrade = "D";
            }
            else
            {
                letterGrade = "F";
            }

            $("#first").text("First Name: " + studentGrade.firstName);
            $("#last").text("Last Name: " + studentGrade.lastName);
            $("#percentage").text("Score: " + finalGrade);
            $("#letter").text("Grade: " + letterGrade);
        }
    }
)
