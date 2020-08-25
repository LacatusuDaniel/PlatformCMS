package licenta.demo.demo.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;

@Entity
@Table(name="customfields")
public class CustomFields {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="customfieldid")
    private Integer customFieldId;
    @Column(name="customtemplate")
    private String customTemplate;
    @Column(name="groupId")
    private Integer groupId;
    @Column(name="label")
    private String label;
    @Column(name="name")
    private String name;
    @Column(name="type")
    private String type;
    @Column(name="customid")
    private String customId;
    @Lob
    @Column(name = "pic")
    private byte[] pic;

    @JsonBackReference
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "groupId", updatable = false, insertable = false)
    private CustomFieldsGroup group;


    public CustomFields(String customTemplate, Integer groupId, String label, String name, String type, CustomFieldsGroup group, byte[] pic) {
        this.customTemplate = customTemplate;
        this.groupId = groupId;
        this.label = label;
        this.name = name;
        this.type = type;
        this.customId = "Salut";
        this.group = group;
        this.pic = pic;

    }

    public CustomFields() {

    }

    public CustomFields(byte[] pic) {
        this.pic = pic;
    }

    public Integer getCustomFieldId() {
        return customFieldId;
    }

    public void setCustomFieldId(Integer customFieldId) {
        this.customFieldId = customFieldId;
    }

    public String getCustomTemplate() {
        return customTemplate;
    }

    public void setCustomTemplate(String customTemplate) {
        this.customTemplate = customTemplate;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getCustomId() {
        return customId;
    }

    public void setCustomId(String name, Integer customFieldId) {
        this.customId = this.name+ "_"+ this.customFieldId;
    }

    public Integer getGroupId() {
        return groupId;
    }

    public void setGroupId(Integer groupId) {
        this.groupId = groupId;
    }

    public CustomFieldsGroup getGroup() {
        return group;
    }

    public void setGroup(CustomFieldsGroup group) {
        this.group = group;
    }

    public byte[] getPic() {
        return pic;
    }

    public void setPic(byte[] pic) {
        this.pic = pic;
    }
}
