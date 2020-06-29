# ArtemisBank
Ordinario de Algoritmos

# Integrantes
Almeyda Ramos Roger Francisco
Mendoza Matos Sergio
Tostado Alamo Miguel
Rivas Emilio
Lopez Daniel
Vadillo Jimena

# 1. Introducción
El objetivo principal para este proyecto correspondiente a la materia de algoritmos, consiste
en realizar un programa que integre el algoritmo basado en programación dinámica para
cumplir con las funciones de un cajero automático, de igual manera se requiere de la
implementación de archivos JSON para almacenar la información.

# 2. Definición general del Proyecto
De manera general el proyecto consiste en simular la funcionalidad de un cajero autoático
usando el algoritmo (Dynamic Programming Algorithm), así como otras funciones e
implementaciones aprendidas a lo largo del semestre. La finalidad es simular lo que sería
un intercambio de dinero, depósitos, retiros, así como pagos, para ello serán utilizadas las
divisas mexicanas y principalmente la parte que da el cambio es la que debe dar las
denominaciones de mayor conveniencia dependiendo de la cantidad de dinero disponible a
dar y la cantidad a cambiar.

# 3. Especificación de requerimientos
El programa contará con un apartado de inicio de session mediante un número de tarjeta de
crédito. Se pretende cubrir dos perfiles, el de administrador y el de un usuario común. En el
caso del usuario común se debe cubrir con la función de ver el saldo actual, historial de
transacciones, en este se debe poder filtrar por tipo de transacción así como permitir ver
todas. Se debe poder realizar retiros con una opción mínima de retiro de $50, en caso de no
existir efectivo disponible para realizar el retiro se deben mostrar los mensajes
correspondientes. Cumplir con la función de hacer depósitos, esta transacción debe ser
agregada al historial de transacciones. Cumplir con la función de pagar servicios,
facilitando al usuario elegir el servicio y la cantidad a pagar, en caso de ser pago en
efectivo, se debe devolver el cambio correspondiente, la denominación mínima es de $1, de
no ser posible la transacción mostrar los mensajes correspondientes.
En el caso del administrador, mostrar el historial de transacciones cumpliendo con los
criterios mencionados en el usuario normal, realizar depósitos con los criterios
mencionados anteriormente, por ultimo cubrir con la administración de los servicios, donde
se pueden agregar o quitar de las funciones del cajero.

# 4. Listado de herramientas utilizadas
Para el desarrollo de este proyecto se implementó el lenguaje de programación JavaScript,
manejando el entorno de desarrollo integrado (IDE) Visual Studio Code, utilizando las
funciones de Node.JS, se usaron archivos JSON para almacenar la información necesaria,
sin embargo, se recurrió a MongoDB para el maneja de la base de datos. El proyecto se
realizó a modo de página web implementando React js

