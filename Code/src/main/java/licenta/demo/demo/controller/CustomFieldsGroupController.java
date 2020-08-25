package licenta.demo.demo.controller;

import licenta.demo.demo.entity.CustomFields;
import licenta.demo.demo.entity.CustomFieldsGroup;
import licenta.demo.demo.service.CustomFieldsGroupService;
import licenta.demo.demo.service.CustomFieldsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@CrossOrigin()
@RestController
@RequestMapping(CustomFieldsGroupController.BASE_URL)
public class CustomFieldsGroupController {
    public static final String BASE_URL="/customfieldsgroup";

    @Autowired
    private CustomFieldsGroupService customFieldsGroupService;

    @Autowired
    private CustomFieldsService customFieldsService;

    @GetMapping("/all")
    public List<CustomFieldsGroup> list(){
        return customFieldsGroupService.listAll();
    }

    @GetMapping("/{groupId}")
    public ResponseEntity<CustomFieldsGroup> get(@PathVariable Integer groupId) {
        try {
            CustomFieldsGroup customFieldsGroup = customFieldsGroupService.get(groupId);
            return new ResponseEntity<CustomFieldsGroup>(customFieldsGroup, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<CustomFieldsGroup>(HttpStatus.NOT_FOUND);
        }
    }
//        public ResponseEntity<CustomFields> get(@PathVariable Integer groupId) {
//            try {
//                CustomFields customFields = customFieldsService.get(groupId);
//                return new ResponseEntity<CustomFields>(customFields, HttpStatus.OK);
//            } catch (NoSuchElementException e) {
//                return new ResponseEntity<CustomFields>(HttpStatus.NOT_FOUND);
//            }
//        }

    @PutMapping("/{customFieldGroupId}")
    public ResponseEntity<?> update(@RequestBody CustomFieldsGroup customFieldsGroup, @PathVariable Integer customFieldGroupId) {
        try {
            CustomFieldsGroup existCustomField = customFieldsGroupService.get(customFieldGroupId);
            customFieldsGroupService.save(customFieldsGroup);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/addcustomfieldsgroup")
    public void add(@RequestBody CustomFieldsGroup customFieldsGroup){
        customFieldsGroupService.save(customFieldsGroup);
    }


    @DeleteMapping("/{customFieldGroupId}")
    public void delete(@PathVariable Integer customFieldGroupId) {
        customFieldsGroupService.delete(customFieldGroupId);
    }
}
