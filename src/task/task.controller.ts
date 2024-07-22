import {Request, Response} from "express";
import {TaskInterface} from "./task.interface";


export const createTask = async (req: Request, res: Response) => {
    const task: TaskInterface = req.body;
    res.json(task);
};

export const listTask = async (req: Request, res: Response) => {
    const tasks: TaskInterface[] = [];
    res.json(tasks);
}

export const getTask = async (req: Request, res: Response) => {
    const task: TaskInterface = req.body;
    res.json(task);
}

export const updateTask = async (req: Request, res: Response) => {
    const task: TaskInterface = req.body;
    res.json(task);
}

export const deleteTask = async (req: Request, res: Response) => {
    const task: TaskInterface = req.body;
    res.json(task);
}