import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
})
export class SignalComponent {
  protected signalNome = signal('daniel');
  protected signalContador = signal(1);
  protected showCount = signal(true)
  protected signalBool = signal(false);
  protected signalObjeto = signal({ nome: 'daniel', idade: 38 });

  protected computedExemplo = computed(() => {
    console.log('passou no computed');
    if (this.showCount()) {
      return `${this.signalContador()} computed!`;
    } else {
      return 'NADA';
    }
  });

  modificarShowConunt(){
    this.showCount.update(x => !x)
  }

  executarContador() {
    //set: Modifica o valor
    // this.signalContador.set(10);
    this.signalBool.set(true);

    //update: Modifica o valor com base no valor atual
    this.signalContador.update((contador) => contador + 1);

    //update: Modifica o valor com base no valor atual devendo passar todos os atributos
    this.signalObjeto.update((obj) => {
      return { ...obj, idade: 400 };
    });
  }
}
