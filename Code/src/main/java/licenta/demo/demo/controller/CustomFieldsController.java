package licenta.demo.demo.controller;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import licenta.demo.demo.entity.CustomFields;
import licenta.demo.demo.repository.CustomFieldsRepository;
import licenta.demo.demo.service.CustomFieldsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.NoSuchElementException;

@CrossOrigin()
@RestController
@RequestMapping(CustomFieldsController.BASE_URL)
public class CustomFieldsController {
    public static final String BASE_URL="/customfields";

    @Autowired
    private CustomFieldsService customFieldsService;

    @Autowired
    private CustomFieldsRepository customFieldsRepository;

    @GetMapping("/all")
    public List<CustomFields> list(){
        return customFieldsService.listAll();
    }

    @GetMapping("/{customFieldId}")
    public ResponseEntity<CustomFields> get(@PathVariable Integer customFieldId) {
        try {
            CustomFields customFields = customFieldsService.get(customFieldId);
            return new ResponseEntity<CustomFields>(customFields, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<CustomFields>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/group/{groupId}")
    public ResponseEntity<List<CustomFields>> getCustomFieldsGroupByGroupId(@PathVariable Integer groupId) {
        return new ResponseEntity<List<CustomFields>>(customFieldsService.getCustomFieldsGroupByGroupId(groupId), HttpStatus.OK);
    }



    @PutMapping("/{customFieldId}")
    public ResponseEntity<?> update(@RequestBody CustomFields customFields, @PathVariable Integer customFieldId) {
        try {

            customFields.setCustomId(customFields.getName(),customFields.getCustomFieldId());
            customFieldsService.save(customFields);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/addcustomfields")
    public void add(@RequestBody CustomFields customFields){
        customFields.setCustomId(customFields.getName(),customFields.getCustomFieldId());
        customFieldsService.save(customFields);
        customFields.setCustomId(customFields.getName(),customFields.getCustomFieldId());
        customFieldsService.save(customFields);

    }


    @DeleteMapping("/{customFieldId}")
    public void delete(@PathVariable Integer customFieldId) {
        customFieldsService.delete(customFieldId);
    }


    @PostMapping("/upload")
    public ResponseEntity<?> uploadImage(@RequestParam("file") MultipartFile file, @RequestParam("user") String user) throws JsonParseException, JsonMappingException, IOException {
        try {
        CustomFields customFields= new ObjectMapper().readValue(user,CustomFields.class);
        customFields.setPic(file.getBytes());
            customFields.setCustomId(customFields.getName(),customFields.getCustomFieldId());
            customFieldsService.save(customFields);
            customFields.setCustomId(customFields.getName(),customFields.getCustomFieldId());
            customFieldsService.save(customFields);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


}
