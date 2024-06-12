import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CepService } from '../../services/buscacep.service';

@Component({
  selector: 'app-buscacep',
  templateUrl: './buscacep.component.html',
  styleUrls: ['./buscacep.component.css']
})
export class BuscacepComponent  {

  userForm: FormGroup;

  constructor(private fb: FormBuilder, private cepService:CepService ) {
    this.userForm = this.fb.group({
      nomeCompleto: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      cep: ['', Validators.required],
      rua: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: [''],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.userForm.value);
    this.onCepBlur()
  }

  onCepBlur() {
    const cep = this.userForm?.get('cep')!.value;
    this.cepService.getCep(cep).subscribe((data: any) => {
    
      this.userForm.patchValue({
        rua: data.logradouro,
        complemento: data.complemento,
        bairro: data.bairro,
        cidade: data.localidade,
        estado: data.uf
      });
    });
  }



 }
