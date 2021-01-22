<?php

namespace App\Controller;


use App\Repository\PostRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class ApiPostController extends AbstractController
{
    /**
     * @Route("/api_v1/posts", name="api_post_list", methods={"GET"})
     */
    public function index(PostRepository $postRepository, SerializerInterface $serializer)
    {
       $posts = $postRepository->findAll();

       $json = $serializer->serialize($posts, 'json', ['groups' => 'post:read']);

       $response = new JsonResponse($json, 200, [], true);


       return $response;
    }
}