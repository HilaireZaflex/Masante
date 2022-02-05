package com.example.masante.controller;

import com.example.masante.entity.Compte;
import com.example.masante.service.CompteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/masante/api/test")
@CrossOrigin("*")
public class CompteController {
    @Autowired
    CompteService compteService;

    //Creer un compte
    @PostMapping(path = "/creer")
    public String creerCompte(@RequestBody Compte compte){
        this.compteService.CreerCompte(compte);
        return "compte creer avec success";
    }

    //mis a jour (modifier) compte
    @PutMapping(path ="/modifier/{id}" )
    public @ResponseBody ResponseEntity<?> modifier(@RequestBody Compte compte,@PathVariable(name = "id") Long id){
        return  new ResponseEntity<>(compteService.updateCompte(id, compte), HttpStatus.OK);
    }



    //Afficher tout les compte
    @GetMapping(path = "/tout")
    public List<Compte> getAllCompte(){
        return this.compteService.getAllCompte();
    }



}
