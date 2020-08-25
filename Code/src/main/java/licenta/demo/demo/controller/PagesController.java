package licenta.demo.demo.controller;

import licenta.demo.demo.entity.Pages;
import licenta.demo.demo.service.PagesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.NoSuchElementException;

@CrossOrigin()
@RestController
@RequestMapping(PagesController.BASE_URL)
public class PagesController {

    public static final String BASE_URL = "/pages";
    @Autowired
    private PagesService pagesService;

    @GetMapping(value = "/all")
    public List<Pages> list() {
        return pagesService.listAll();
    }


    @GetMapping("/{pageId}")
    public ResponseEntity<Pages> get(@PathVariable Integer pageId) {
        try {
            Pages pages = pagesService.get(pageId);
            return new ResponseEntity<Pages>(pages, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Pages>(HttpStatus.NOT_FOUND);
        }
    }


    @PostMapping("/addpages")
    public void add(@RequestBody Pages pages) {
        pages.setCreatedDateAndTime(LocalDateTime.now());
        pagesService.save(pages);
    }

    @PutMapping("/{pageId}")
    public ResponseEntity<?> update(@RequestBody Pages pages, @PathVariable Integer pageId) {
        try {
            Pages existPage = pagesService.get(pageId);
            pagesService.save(pages);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{pageId}")
    public void delete(@PathVariable Integer pageId) {
        pagesService.delete(pageId);
    }

}
