package licenta.demo.demo.controller;

import licenta.demo.demo.entity.Templates;
import licenta.demo.demo.service.TemplatesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@CrossOrigin()
@RestController
@RequestMapping(TemplatesController.BASE_URL)
public class TemplatesController {

    public static final String BASE_URL="/templates";

    @Autowired
    private TemplatesService templatesService;

    @GetMapping("/all")
    public List<Templates> list(){
        return templatesService.listAll();
    }

    @GetMapping("/{templateId}")
    public ResponseEntity<Templates> get(@PathVariable Integer templateId) {
        try {
            Templates templates = templatesService.get(templateId);
            return new ResponseEntity<Templates>(templates, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Templates>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/addtemplate")
    public void add(@RequestBody Templates templates){
        templatesService.save(templates);
    }

    @PutMapping("/{templateId}")
    public ResponseEntity<?> update(@RequestBody Templates templates, @PathVariable Integer templateId) {
        try {
            Templates existTemplate = templatesService.get(templateId);
            templatesService.save(templates);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{templatesId}")
    public void delete(@PathVariable Integer templatesId) {
        templatesService.delete(templatesId);
    }

}
