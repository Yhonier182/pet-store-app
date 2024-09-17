
// Este código define un componente de Angular para un formulario de inicio de sesión.

// Importaciones necesarias de Angular
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Decorador @Component que define los metadatos del componente
@Component({
  selector: 'app-login', // Selector CSS para usar este componente en el HTML
  templateUrl: './login.component.html', // Plantilla HTML asociada
  styleUrls: ['./login.component.scss'] // Estilos SCSS asociados
})

// Definición de la clase del componente
export class LoginComponent implements OnInit {

   // Declaración del formulario reactivo
   loginForm!: FormGroup;

   // Constructor del componente que inyecta el FormBuilder
   constructor(private formBuilder: FormBuilder) {}
 
   // Método de inicialización del componente
   ngOnInit(): void {
     // Creación del formulario con sus campos y validadores
     this.loginForm = this.formBuilder.group({
       email: ['', [Validators.required, Validators.email]],
       password: ['', Validators.required]
     });
   }
 

   

  // Método que se ejecuta al enviar el formulario
  onSubmit() {
    if (this.loginForm.valid) {
      // Si el formulario es válido, se procede con la autenticación
      console.log('Autenticando usuario...');
      console.log(this.loginForm.value);
    } else {
      // Si el formulario es inválido, se manejan los errores
      console.log('Formulario inválido');
      Object.keys(this.loginForm.controls).forEach(key => {
        const control = this.loginForm.get(key);
        if (control?.invalid) {
          console.log(`Campo ${key} inválido:`, control.errors);
        }
      });
    }
  }
  
 
}

// Este componente maneja la lógica del formulario de inicio de sesión,
// incluyendo la validación de campos, la gestión de errores y la
// preparación para el envío de datos de autenticación.
