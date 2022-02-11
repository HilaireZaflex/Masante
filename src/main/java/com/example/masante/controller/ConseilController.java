package com.example.masante.controller;



import com.example.masante.entity.Conseil;
import com.example.masante.service.ConseilService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/masante/api/test")
@CrossOrigin("*")
public class ConseilController {

    @Autowired
    ConseilService conseilService;

    //Ajouter conseil
    @PostMapping(path = "/ajouterConseil")
    public String AjoutConseil(@RequestBody Conseil conseil){
        this.conseilService.ajouterConseil(conseil);
        return "Conseil ajouter avec success";
    }

    //mis a jour (modifier) Conseil
    @PutMapping(path ="/modifierConseil/{id}" )
    public @ResponseBody
    ResponseEntity<?> modifier(@RequestBody Conseil conseil, @PathVariable(name = "id") Long id){
        return  new ResponseEntity<>(conseilService.updateConseil(id, conseil), HttpStatus.OK);
    }

    //Afficher tout les Conseil
    @GetMapping(path = "/allConseil")
    public List<Conseil> getAllConseil(){
        return this.conseilService.getAllConseil();
    }
    //Afficher  Conseil par id
    @GetMapping(path = "/ConseilById/{id}")
    public Conseil getConseilById(@PathVariable("id") Long id){
        return conseilService.getConseilById(id);
    }

    //Suprimer une Conseil
    @DeleteMapping(path = "/suprimerConseil/{id}")
    public String suprimeConseil(Long id){
        this.conseilService.deleteConseil(id);
        return "Conseil suprimer avec succes!!!";
    }
}
