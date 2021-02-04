<?php

namespace App\Controller;

use App\Service\CommentService;
use App\Service\PostService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/api/posts")
 */
class ApiPostController extends AbstractController
{
    /**
     * @Route("/", name="api_post_list", methods={"GET"})
     */
    public function index(PostService $postService, SerializerInterface $serializer)
    {
       $posts = $postService->findAll();

       $json = $serializer->serialize($posts, 'json', ['groups' => 'post:read']);

       $response = new JsonResponse($json, 200, [], true);


       return $response;
    }

    /**
     * @Route("/{id}", name="api_post_by_id", methods={"GET"})
     */
    public function getPost($id, PostService $postService, SerializerInterface $serializer)
    {
        $post = $postService->findById($id);

        $json = $serializer->serialize($post, 'json', ['groups' => 'post:read']);

        $response = new JsonResponse($json, 200, [], true);


        return $response;
    }
}