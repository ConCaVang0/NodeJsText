import express from 'express';
import articlesController from '../../controllers/articles.controller';

const router = express.Router();

//Get All articles from DB
router.get('/', articlesController.getAll);

//Get articles by ID
router.get('/:id', articlesController.getItemById);

//Create a new articles
router.post('/', articlesController.createItem);

/**
 * Update a articles by ID
 * PATH /api/v1/:id
 */
router.patch('/:id',articlesController.updateItem);

/**
 * Delete a articles by ID
 * DELETE /api/v1/:id
 */
router.delete('/:id', articlesController.deleteItem);

export default router;