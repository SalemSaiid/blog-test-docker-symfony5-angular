<?php

namespace App\Service;


use App\Repository\CommentRepository;
use Doctrine\DBAL\Driver\Connection;


class CommentService
{
    private $commentRepository;

    public function __construct(CommentRepository $commentRepository)
    {
        $this->commentRepository = $commentRepository;
    }
}