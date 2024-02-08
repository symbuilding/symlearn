import express from "express";
import bodyParser from "body-parser";
import {
    timeTableSchema,
    classPatternSchema,
    Course,
    lectureSchema,
    Lecture,
} from "./types";
import timetableData from "./data/timetable.json";
import * as fs from "fs";

const getTimetableData = async () => {
    return timetableData;
};

let jsonParser = bodyParser.json();

const app = express();

app.get("/timetable", (_, res) => {
    res.status(405).json({ "/timetable/{}": "course / date" });
});

app.get(
    "/timetable/course-wise/:coures_name/:date",
    jsonParser,
    async function (req, res) {
        const courseName = req.params.coures_name;
        const lectureDate = req.params.date;

        const data = await getTimetableData();

        let desired_course: Course | undefined;

        data.courses.forEach((course) => {
            if (course.name.toLowerCase() === courseName.toLowerCase()) {
                desired_course = course;
            }
        });

        if (!desired_course) {
            return res.json({
                error: `Provided course, ${courseName} does not exist`,
            });
        }

        res.json(
            desired_course.lectures.filter(
                (lecture) => lecture.date === lectureDate
            )
        );

        /*
         *FIXME:  Do we need this :c

        const validatedData = timeTableSchema.safeParse(req.body);

        if (validatedData.success) {
            console.log(validatedData.data);

            res.json(getTimetableData());
        } else {
            const resObj = {
                res: "nono. Bad request",
            };
            res.json(resObj);
        }
        */
    }
);

app.get("/timetable/date-wise/:date", async (req, res) => {
    const lectureDate = req.params.date;

    const data = await getTimetableData();

    const lectures: Lecture[] = [];

    data.courses.forEach((course) => {
        course.lectures.forEach(lecture => {
            if(lecture.date === lectureDate){
                lectures.push(lecture);
            }
        })
    });

    res.json({ lectures });
});

app.post("/timetable/:course_name", jsonParser, async function (req, res) {
    const course_name = req.params.course_name;
    const validatedData = lectureSchema.safeParse(req.body);
    if (validatedData.success) {
        const lectures = validatedData.data;

        const data = await getTimetableData();

        const desired_course = data.courses.find(
            (course) => course.name.toLowerCase() === course_name.toLowerCase()
        );

        if (!desired_course) {
            return res.status(405).json({
                error: `Provided course, ${course_name} does not exist`,
            });
        }

        lectures.lectures.forEach((lecture) => {
            desired_course.lectures.push({ lid: 10, ...lecture });
        });

        fs.writeFileSync("src/data/timetable.json", JSON.stringify(data));

        res.json("Lecture has been added");
    } else {
        res.status(405).json({
            error: "Invalid body format for this endpoint.",
        });
    }
});

app.put("/timetable/:id", jsonParser, function (req, res) {
    const timetableId = req.params.id;
    const updateData = req.body;

    const validatedData = timeTableSchema.safeParse(updateData);

    if (validatedData.success) {
        const updatedQuery = {
            id: timetableId,
            ...validatedData.data,
        };

        console.log("Updated timetable entry:", updatedQuery);

        const resObj = {
            res: "Update successful",
        };
        res.json(resObj);
    } else {
        const resObj = {
            res: "something fucked up ",
        };
        res.status(400).json(resObj);
    }
});

app.delete("/timetable/:id", function (req, res) {
    const timetableId = req.params.id;

    console.log("Deleted timetable entry with id:", timetableId);

    const resObj = {
        res: "Timetable entry deleted successfully",
    };
    res.json(resObj);
});

app.post("/classPattern/:id", jsonParser, function (req, res) {
    const classId = req.params.id;

    const validatedData = classPatternSchema.safeParse(req.body);
    if (validatedData.success) {
        const classLayoutParameters = validatedData.data;

        const noOfRows = classLayoutParameters.rows;
        const noOfColumns = classLayoutParameters.columns;

        type Seat = {
            seatNumber: string;
        };

        let layout: Seat[][] = [];

        for (let i = 0; i < noOfRows; i++) {
            const row: Seat[] = [];
            for (let j = 0; j < noOfColumns; j++) {
                const seatNumber = `Seat ${i * noOfColumns + j + 1}`;
                row.push({ seatNumber });
            }
            layout.push(row);
        }

        res.json({ layout });
    } else {
        res.status(400).json({ error: "Invalid class layout" });
    }
});

app.listen(4000);
