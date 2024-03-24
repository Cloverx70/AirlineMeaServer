import { Column, Entity } from "typeorm";

@Entity("userflights", { schema: "airlinelebanon" })
export class Userflights {
  @Column("int", { primary: true, name: "userflight_id" })
  userflightId: number;

  @Column("int", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("int", { name: "flight_id", nullable: true })
  flightId: number | null;

  @Column("varchar", { name: "departingfrom", nullable: true, length: 80 })
  departingfrom: string | null;

  @Column("varchar", { name: "arrivingat", nullable: true, length: 80 })
  arrivingat: string | null;

  @Column("decimal", {
    name: "bookedtickets",
    nullable: true,
    precision: 18,
    scale: 0,
  })
  bookedtickets: string | null;

  @Column("datetime", { name: "departing_date", nullable: true })
  departingDate: Date | null;

  @Column("varchar", { name: "flight_type", nullable: true, length: 50 })
  flightType: string | null;

  @Column("varchar", { name: "continent", nullable: true, length: 50 })
  continent: string | null;

  @Column("decimal", {
    name: "tickets",
    nullable: true,
    precision: 18,
    scale: 0,
  })
  tickets: string | null;

  @Column("datetime", { name: "timestamp", nullable: true })
  timestamp: Date | null;
}
