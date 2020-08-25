package licenta.demo.demo.service;

import licenta.demo.demo.entity.CustomFields;
import licenta.demo.demo.repository.CustomFieldsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomFieldsService {

    @Autowired
    private  CustomFieldsRepository customFieldsRepository;

    public List<CustomFields> listAll(){
        return customFieldsRepository.findAll();
    }

    public void save(CustomFields customFields){
        customFieldsRepository.save(customFields);
    }

    public CustomFields get(Integer customFieldId){
        return customFieldsRepository.findById(customFieldId).get();
    }

    public void delete(Integer customFieldId){
        customFieldsRepository.deleteById(customFieldId );
    }

    public List<CustomFields> getCustomFieldsGroupByGroupId(Integer groupId) {
        List<CustomFields> list = customFieldsRepository.CustomFieldsGroupByGroupId(groupId);
        list.forEach(l -> System.out.println(l));
        return list;
    }
}
