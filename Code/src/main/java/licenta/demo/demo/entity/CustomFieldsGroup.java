package licenta.demo.demo.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="customfieldsgroup")
public class CustomFieldsGroup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="groupid")
    private Integer groupId;
    @Column(name="groupname")
    private String groupName;
    @Column(name="templates_templateId")
    private Integer templates_TemplateId;


    @JsonBackReference
    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.REFRESH, CascadeType.MERGE}, fetch = FetchType.LAZY)
    @JoinColumn(name = "templates_templateId", updatable = false, insertable = false)
    private Templates templates;

    @OneToMany(mappedBy = "group")
    private Set<CustomFields> customFields;

    public CustomFieldsGroup() {
    }

    public CustomFieldsGroup(String groupName, Templates templates, Set<CustomFields> customFields) {
        this.groupName = groupName;
        this.templates = templates;
        this.customFields = customFields;
    }

    public Integer getGroupId() {
        return groupId;
    }

    public void setGroupId(Integer groupId) {
        this.groupId = groupId;
    }


    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    public Templates getTemplates() {
        return templates;
    }

    public void setTemplates(Templates templates) {
        this.templates = templates;
    }

    public Set<CustomFields> getCustomFields() {
        return customFields;
    }

    public void setCustomFields(Set<CustomFields> customFields) {
        this.customFields = customFields;
    }

    public Integer getTemplates_TemplateId() {
        return templates_TemplateId;
    }

    public void setTemplates_TemplateId(Integer templates_TemplateId) {
        this.templates_TemplateId = templates_TemplateId;
    }
}
