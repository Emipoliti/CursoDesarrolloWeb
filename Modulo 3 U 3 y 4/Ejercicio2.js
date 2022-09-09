const numeros = [100, 56, 1245, 3, 89, 9];
		
		let mayor = 0;

		for (let i = 0; i < numeros.length; i++) {
			if (numeros[i] > mayor) {
				mayor = numeros[i];
			}
		}

		console.log('el mayor de ' + numeros + ' es ' + mayor);
		console.log(`El mayor de ${numeros} es ${mayor}`);