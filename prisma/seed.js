const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

async function main() {
    await prisma.categoria.createMany({
        data: [
            { nombre: 'Electrónicos' },
            { nombre: 'Muebles' },
            { nombre: 'Vehículos' },
            { nombre: 'Herramientas' },
        ],
    });

    await prisma.localizacion.createMany({
        data: [
            { nombre: 'Laboratorio de computo A' },
            { nombre: 'Almacén Central' },
            { nombre: 'Laboratorio de computo B' },
        ],
    });

    await prisma.tipoActivo.createMany({
        data: [
            { nombre: 'Laptop' },
            { nombre: 'Silla' },
            { nombre: 'Automóvil' },
        ],
    });

    await prisma.usuario.createMany({
        data: [
            { name: 'Juan Perez', email: 'juan.perez@example.com' },
            { name: 'Laura Gómez', email: 'laura.gomez@example.com' },
        ],
    });

    await prisma.activo.createMany({
        data: [
            {
                numeroSerie: 'SN12345',
                numeroEquipo: 101,
                descripcion: 'Laptop HP ProBook',
                status: 'Activo',
                fechaRegistro: new Date(),
                tipoActivoId: 1,
                localizacionId: 1,
                usuarioId: 1,
                categoriaId: 1,
            },
            {
                numeroSerie: 'SN67890',
                numeroEquipo: 202,
                descripcion: 'Silla ergonómica',
                status: 'Activo',
                fechaRegistro: new Date(),
                tipoActivoId: 2,
                localizacionId: 2,
                usuarioId: 2,
                categoriaId: 2,
            },
        ],
    });

    console.log('✔ Datos sembrados exitosamente');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
