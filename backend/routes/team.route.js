import express from 'express';
import {
  getAllTeams,
  getTeamById,
  createTeam,
  updateTeam,
  deleteTeam
} from '../handlers/team.handler.js';

const router = express.Router();

router.get('/', getAllTeams);             // GET /api/teams
router.get('/:id', getTeamById);          // GET /api/teams/:id
router.post('/', createTeam);             // POST /api/teams
router.put('/:id', updateTeam);           // PUT /api/teams/:id
router.delete('/:id', deleteTeam);        // DELETE /api/teams/:id

export default router;
