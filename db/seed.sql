USE project_2_local;

INSERT INTO users (email, password, firstName, Lastname, isAuthor, canComment)
Values ("timmyJingles6991@yahoo.com", "Encrypted101", "Timmy", "Jingles", true, true), ("babyBoyBelmore@hotmail.com", "StayGolden596", "Baby", "Boy", true, true), ("MrThreeOFive@mrworldwide.org", "D@L3!", "Pit", "Bull", true, true), ("firstGuy@bing.com", "password", "FIRST", "GUY", false, true);



INSERT INTO posts (title, body, rating, userId, isArticle, isReview)
VALUES ("Is the cake a lie?", "You're darn tootin it is? Why? Because I read it on the internet that's why", 4, 1,1,0),
 ("What do the numbers REALLY mean Mason?", "It is my humble opinion that the 'Numbers' that the secret service agents are hounding Mason about are really a sudoku puzzle.
 And the agents are simply unaware of what sudoku is, and therefore think that they must be some sort of code or message. Really, it's just a game.",5, 1, 1,0),
 ("af;oijffa;efnaoijfjfads", "af;ofw;ofnfenwafonowefiowefj wefaweafijo wefijo  weijo wef aijo sfd ijo sfd ijo fda ijo sfdijo efijo ef", 1,  2, 0, 1),
 ("Uno, Dos, Tres, Quatro!", "MR. WORLDWIDE! DALE! DALE! 3-0-5! Take a picture of me with a Kodak!",5, 3, 0, 1);

INSERT INTO comments (commentText, PostId, UserId)
VALUES ("FALSE! ThE CAAAke is REaL! YoU shEEp!", 1, 3), ("^^^!", 1, 2), ("First.", 1, 4), ("No...Just no", 2, 1), ("DALE!", 3, 3), ("MR. WORLDWIDE!", 3, 3);

SELECT * FROM users;
SELECT * FROM posts;
SELECT * FROM comments;