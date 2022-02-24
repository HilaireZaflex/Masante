package com.example.masante.donnee.controller;


import com.example.masante.donnee.service.DonneeService;
import com.example.masante.donnee.entity.Donnee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/masante/api/test")
@CrossOrigin("*")
public class DonneeController {

    @Autowired
    DonneeService donneeService;

    //Ajouter donnee
    @PostMapping(path = "/ajouterDonnee")
    public String AjoutDonnee(@RequestBody Donnee donnee){
        this.donneeService.ajouterDonnee(donnee);
        return "Donnee ajouter avec success";
    }

    //mis a jour (modifier) Donnee
    @PutMapping(path ="/modifierDonnee/{id}" )
    public @ResponseBody
    ResponseEntity<?> modifier(@RequestBody Donnee donnee, @PathVariable(name = "id") Long id){
        return  new ResponseEntity<>(donneeService.updateDonnee(id, donnee), HttpStatus.OK);
    }

    //Afficher tout les Donnee
    @GetMapping(path = "/allDonnee")
    public List<Donnee> getAllDonnee(){
        return this.donneeService.getAllDonnee();
    }
    //Afficher  Donnee par id
    @GetMapping(path = "/DonneeById/{id}")
    public Donnee getDonneeById(@PathVariable("id") Long id){
        return donneeService.getDonneeById(id);
    }

    //Suprimer une donnee
    @DeleteMapping(path = "/suprimerDonnee/{id}")
    public String suprimeDonnee(Long id){
        this.donneeService.deleteDonnee(id);
        return "Compte suprimer avec succes!!!";
    }

    @PostMapping(path = "/calculDonnee")
    public String CalculDonnee(@RequestBody Donnee donnee){
        return this.donneeService.calcul(donnee);

    }
        /**====================TENSION============================*/
    @PostMapping(path = "/calculTension")
    public String calculTension(@RequestBody Donnee donnee){
        return this.donneeService.calculTension(donnee);

    }

    /**====================DIABETE============================*/

    @PostMapping(path = "/calculDiabete")
    public String CalculDiabete(@RequestBody Donnee donnee){
        return this.donneeService.calculDiabete(donnee);

    }
    /**===========================DERNIER DONNEE==============*/
    @GetMapping(path = "/dernierDonnee")
    public List<Donnee> dernierDonnee(){
        return this.donneeService.dernierDonnee();
    }

}
