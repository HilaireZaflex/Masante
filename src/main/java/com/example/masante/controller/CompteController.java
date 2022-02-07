package com.example.masante.controller;

import com.example.masante.entity.Compte;
import com.example.masante.enumeration.Etat;
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

    //Suprimer un compte
    @DeleteMapping(path = "/suprimer/{id}")
    public String suprimeCompte(Long id){
        this.compteService.deleteCompte(id);
        return "Compte suprimer avec succes!!!";
    }

    //Modifier mot de passe
    @PutMapping(path = "modifierMotDePasse/{id}")
    public String modifierMotDePasse(@RequestBody Compte compte,@PathVariable Integer id){
        this.compteService.modifierMotDePasse(id, compte);
        return "Mot de passse changer avec succes";
    }

    //-----------------------------requete personnaliser----------------------------


    //connexion au compte
    @ResponseBody
    @GetMapping(path = "/connexion/{mobile}/{motDePasse}")
    public Compte connexion(
            @PathVariable("mobile") Integer mobile,
            @PathVariable("motDePasse") Integer motDePasse){
        return this.compteService.connexion(mobile, motDePasse);
    }

    //recuperer tout les comptes dont l'etat est Active
    @GetMapping(path="/compteActive")
    public List<Compte>getAllCompteActive(){
        return compteService.getAllCompteActive();
    }

    //recuperer tout les comptes dont l'etat est Inactive
    @GetMapping(path = "/compteInactive")
    public List<Compte>getAllCompteInactive(){
        return compteService.getAllCompteInactive();
    }

    //recuperer les comptes par id et par etat, d'on

        //l'etat est Active
        @GetMapping(path = "/compteActive/{id}")
        public Compte getCompteActive(@PathVariable("id")Long id){
            return compteService.getCompteByIdAndEtat(id, Etat.ACTIVE);
        }
        //l'etat est Inactive
        @GetMapping(path = "/compteInactive/{id}")
        public Compte getCompteinactive(@PathVariable("id")Long id){
            return compteService.getCompteByIdAndEtat(id, Etat.INACTIVE);
        }

    //desactiver un compte
    @PutMapping(path = "/desactiverCompte/{id}")
    public String disableCompte(@PathVariable("id")Long id){
        this.compteService.disableCompte(id);
        return "Desactiver";
    }

    //activer un compte
    @PutMapping(path = "/activerCompte/{id}")
    public String enableCompte(@PathVariable("id")Long id){
        this.compteService.enableCompte(id);
        return "Activer";
    }



}
