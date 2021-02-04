<?php

namespace App\Service;

use App\Entity\Post;
use App\Repository\PostRepository;
use Doctrine\DBAL\Driver\Connection;


class PostService
{
    private $postRepository;

    public function __construct(PostRepository $postRepository)
    {
        $this->postRepository = $postRepository;
    }

    /**
     * Finds all posts
     */
    public function findAll() {
        $data = $this->postRepository->findAll();

        return $data;
    }

    /**
     * Find post by id
     * @param $id
     * @return Post $post
     */
    public function findById($id) {
        $post = $this->postRepository->findOneBy(['id' => $id]);

        return $post;
    }
}