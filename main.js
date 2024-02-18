export const fn = (ing3, ing4, ing5) => {

   /*First, we add the total of Empanadas to aplly the conditions related to the total number of them to not be more than 40 and to be divisible by 3*/
   let totalEmpanadas = ing3 + ing4 + ing5;

   //applying conditions to the selected total number of Empanadas: no 40 or more  divisible by 3 and no negativa parameters
   if (totalEmpanadas >= 40) {
      throw new Error("El número de empanadas es superior al permitido")
   } if (totalEmpanadas % 3 !== 0) {
      throw new Error("La cantidad de empanadas no es divisible por 3")
   } if (ing3 < 0 || ing4 < 0 || ing5 < 0) {
      throw new Error("No puede haber una cantidad negativa de ningun tipo de empanada")
   }


   /*With the below formula, the relative value of each product is calculated, this let the function calculate total of money raised by any combination through the weighted average (this contemplates in itself the value of two different combined empanadas arithmetic media).*/
   let precioTotal = (((ing3 * 12) + (ing4 * 14) + (ing5 * 16)) / 3);

   //Using Math.ceil, the number obtained by formula (with decimals) is rounded to the closest next integer one. What makes the weighted average works
   return Math.ceil(precioTotal)
}
/*Here is where the PARAMETERS are INTRODUCED according with the previous conditions. If not, an error will be throwed. Minimal cost will show in console because this function is not focused on Front-End at this moment*/
console.log(fn(0, 0, 0))
