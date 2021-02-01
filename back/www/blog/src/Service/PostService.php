<?php

namespace App\Service;

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

        //throw new \Exception('toto');
        $data = $this->postRepository->findAll();

        return $data;
    }
}