var User = require('../api/users/user.model');

app.post('/login', function(req, res, next){
	User.findOne({
		where: req.body
	})
	.then(function(userFound){
		if (!userFound){
			res.sendStatus(401);
		}
		else {
			req.session.user = userFound.id;
			// res.sendStatus(204);
			res.status(204).redirect('/stories');
		}
	})
	.catch(next);
});