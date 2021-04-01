import { Router } from 'express';
import { Meta } from '../types/meta';
import courses from '../../../assets/courses.json';
import general from '../../../assets/general.json';

export const router = Router();

router.get('/', (req, res) => res.render('index', {
  meta: {
    title: 'Home',
    description: 'Learn to code online. Find course discounts, a coding community, free code projects and more on CodeAlive.',
    route: '/',
  } as Meta,
  courses,
}));

router.get('/community', (req, res) => res.redirect(general.communityURL));
router.get('/courses', (req, res) => res.render('courses', {
  meta: {
    title: 'Courses',
    description: 'Find course discounts, and learn to code online for a better price.',
    route: '/',
  } as Meta,
  courses,
}));