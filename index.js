const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('./generated/prisma');

const app = express();
const prisma = new PrismaClient();

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());

app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await prisma.usuario.findMany();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios', detalle: error.message });
  }
});

app.post('/usuarios', async (req, res) => {
  try {
    const { name, email } = req.body;
    const usuario = await prisma.usuario.create({ data: { name, email } });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear usuario', detalle: error.message });
  }
});

app.put('/usuarios/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const usuario = await prisma.usuario.update({
      where: { id: Number(id) },
      data: { name, email },
    });

    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar usuario', detalle: error.message });
  }
});

app.get('/localizaciones', async (req, res) => {
  try {
    const localizaciones = await prisma.localizacion.findMany();
    res.json(localizaciones);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener localizaciones', detalle: error.message });
  }
});

app.post('/localizaciones', async (req, res) => {
  try {
    const { nombre } = req.body;
    const nueva = await prisma.localizacion.create({ data: { nombre } });
    res.json(nueva);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear localización', detalle: error.message });
  }
});

app.put('/localizaciones/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre } = req.body;

    const actualizada = await prisma.localizacion.update({
      where: { id: Number(id) },
      data: { nombre },
    });

    res.json(actualizada);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar localización', detalle: error.message });
  }
});

app.delete('/localizaciones/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.localizacion.delete({ where: { id: Number(id) } });
    res.json({ mensaje: 'Localización eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar localización', detalle: error.message });
  }
});

app.get('/categorias', async (req, res) => {
  try {
    const categorias = await prisma.categoria.findMany();
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener categorías', detalle: error.message });
  }
});

app.post('/categorias', async (req, res) => {
  try {
    const { nombre } = req.body;
    const categoria = await prisma.categoria.create({ data: { nombre } });
    res.json(categoria);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear categoría', detalle: error.message });
  }
});

app.delete('/categorias/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.categoria.delete({ where: { id: Number(id) } });
    res.json({ mensaje: 'Categoría eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar categoría', detalle: error.message });
  }
});

app.put('/categorias/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre } = req.body;
    const actualizada = await prisma.categoria.update({
      where: { id: Number(id) },
      data: { nombre },
    });
    res.json(actualizada);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar categoría', detalle: error.message });
  }
});

app.get('/activos', async (req, res) => {
  try {
    const activos = await prisma.activo.findMany({
      include: {
        tipoActivo: true,
        localizacion: true,
        usuario: true,
        categoria: true
      }
    });
    res.json(activos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener activos', detalle: error.message });
  }
});

app.post('/activos', async (req, res) => {
  try {
    const {
      numeroSerie,
      numeroEquipo,
      descripcion,
      status,
      localizacionId,
      tipoActivoId,
      usuarioId,
      categoriaId
    } = req.body;

    const nuevo = await prisma.activo.create({
      data: {
        numeroSerie,
        numeroEquipo,
        descripcion,
        status,
        localizacionId,
        tipoActivoId,
        usuarioId,
        categoriaId
      }
    });

    res.json(nuevo);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear activo', detalle: error.message });
  }
});

app.put('/activos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const {
      numeroSerie,
      numeroEquipo,
      descripcion,
      status,
      localizacionId,
      tipoActivoId,
      usuarioId,
      categoriaId
    } = req.body;

    const actualizado = await prisma.activo.update({
      where: { id: Number(id) },
      data: {
        numeroSerie,
        numeroEquipo,
        descripcion,
        status,
        localizacionId,
        tipoActivoId,
        usuarioId,
        categoriaId
      }
    });

    res.json(actualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar activo', detalle: error.message });
  }
});

app.delete('/activos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.activo.delete({ where: { id: Number(id) } });
    res.json({ mensaje: 'Activo eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar activo', detalle: error.message });
  }
});

app.get('/tipo-activos', async (req, res) => {
  try {
    const tipos = await prisma.tipoActivo.findMany();
    res.json(tipos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener tipos de activos', detalle: error.message });
  }
});

app.post('/tipo-activos', async (req, res) => {
  try {
    const { nombre } = req.body;
    const tipo = await prisma.tipoActivo.create({ data: { nombre } });
    res.json(tipo);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear tipo de activo', detalle: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
