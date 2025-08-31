from django.test import TestCase
from .models import User, Team, Activity, Leaderboard, Workout

class ModelTests(TestCase):
    def setUp(self):
        marvel = Team.objects.create(name='Marvel')
        dc = Team.objects.create(name='DC')
        User.objects.create(name='Iron Man', email='ironman@marvel.com', team=marvel)
        User.objects.create(name='Batman', email='batman@dc.com', team=dc)

    def test_user_creation(self):
        self.assertEqual(User.objects.count(), 2)

    def test_team_creation(self):
        self.assertEqual(Team.objects.count(), 2)
