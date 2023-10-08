import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.scss'],
})
export class FormListComponent implements OnInit {
  paramInputs!: FormGroup;
  public factories: any = [
    {
      id: 2,
      name: 'Fábrica I',
      panels: [
        { id: 11, name: 'M111' },
        { id: 245, name: '245' },
      ],
    },
    {
      id: 5,
      name: 'Fábrica VII',
      panels: [
        { id: 120, name: 'M120' },
        { id: 33, name: 'M33' },
      ],
    },
    {
      id: 6,
      name: 'Fábrica II',
      panels: [
        { id: 23232, name: 'M23232' },
        { id: 12323, name: 'M12323' },
        { id: 123, name: 'M123' },
      ],
    },
  ];

  requestInputsResponse: any;

  getFactory() {
    return this.factories.map((f: any) => f.name);
  }

  getPanels() {
    const selectedFactory = this.paramInputs.get('factory')?.value;

    if (!selectedFactory) {
      // If no factory is selected, return all panels from all factories
      return this.factories.reduce((allPanels: any[], factory: any) => {
        return allPanels.concat(factory.panels.map((panel: any) => panel.name));
      }, []);
    }

    const factory = this.factories.find((f: any) => f.name === selectedFactory);

    return factory ? factory.panels.map((panel: any) => panel.name) : [];
  }

  getFactoryForPanel(selectedPanel: string): string | null {
    for (const factory of this.factories) {
      const panel = factory.panels.find((p: any) => p.name === selectedPanel);

      if (panel) {
        return factory.name;
      }
    }

    return null;
  }

  updateFactoryForPanel() {
    const selectedPanel: any = this.paramInputs.get('panel')?.value;
    const factoryForPanel = this.getFactoryForPanel(selectedPanel);

    if (factoryForPanel) {
      this.paramInputs.get('factory')?.setValue(factoryForPanel);
    }
  }
  onSubmit() {
    const formData = this.paramInputs.value;

    // Map selected factory name to id
    const selectedFactory = this.factories.find(
      (f: any) => f.name === formData.factory
    );
    formData.factory = selectedFactory ? selectedFactory.id : null;

    // Map selected panel name to id
    if (formData.panel) {
      for (const factory of this.factories) {
        const selectedPanel = factory.panels.find(
          (p: any) => p.name === formData.panel
        );
        if (selectedPanel) {
          formData.panel = selectedPanel.id;
          break;
        }
      }
    }

    this.apiService.fetchData(this.paramInputs.value).subscribe((response) => {
      if (response.status === 'success') {
        this.requestInputsResponse = response.data;
        console.log('dentro', response.data);
      }
    });
    // Now, formData object contains IDs instead of names for factory and panel
    // You can send the formData to your backend or perform other actions here
  }

  constructor(
    private _formBuilder: FormBuilder,
    private apiService: UserService
  ) {
    this.paramInputs = this._formBuilder.group({
      factory: [''],
      panel: [''],
      productionOrder: [''],
    });
  }
  ngOnInit(): void {}
}
