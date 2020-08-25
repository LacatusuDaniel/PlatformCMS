package licenta.demo.demo.service;

import licenta.demo.demo.entity.CustomFieldsGroup;
import licenta.demo.demo.repository.CustomFieldsGroupRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomFieldsGroupService {

    @Autowired
    private CustomFieldsGroupRepository customFieldsGroupRepository;

    public List<CustomFieldsGroup> listAll(){
        return customFieldsGroupRepository.findAll();
    }

    public void save(CustomFieldsGroup customFieldsGroup){
        customFieldsGroupRepository.save(customFieldsGroup);
    }

    public CustomFieldsGroup get(Integer customFieldGroupId){
        return customFieldsGroupRepository.findById(customFieldGroupId).get();
    }

    public void delete(Integer customFieldGroupId){
        customFieldsGroupRepository.deleteById(customFieldGroupId );
    }


}
